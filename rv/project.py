from collections import defaultdict
from io import BytesIO
from struct import pack

from rv import ENCODING
from rv.lib.iff import write_chunk
from rv.modules.output import Output


class Project(object):
    """SunVox project comprised of metadata, modules, and patterns

    A Project can be saved as a ``.sunvox`` file,
    or can be embedded within a `MetaModule`.
    """

    MAGIC_CHUNK = (b'SVOX', b'')

    def __init__(self):
        self.module_connections = defaultdict(list)
        self.output = Output()
        self.modules = [self.output]
        self.sunvox_version = (1, 9, 1, 0)
        self.based_on_version = (1, 9, 1, 0)
        self.initial_bpm = 125
        self.initial_tpl = 6
        self.global_volume = 80
        self.name = 'Project'
        self.modules_scale = 256
        self.modules_zoom = 256
        self.modules_x_offset = 0
        self.modules_y_offset = 0
        self.modules_layer_mask = 0x00000000
        self.modules_current_layer = 0
        self.timeline_position = 0
        self.selected_module = 0
        self.current_pattern = 0
        self.current_track = 0
        self.current_line = 1

    def attach_module(self, module):
        """Attach the module to the project."""
        if module is None:
            self.modules.append(module)
        elif module not in self.modules:
            self.modules.append(module)
            module.index = self.module_index(module)
            self.module_connections[module.index] = module.incoming_links

    def connect(self, from_module, to_module):
        """Establish a connection from one module to another."""
        from_idx = self.module_index(from_module)
        to_idx = self.module_index(to_module)
        connections = self.module_connections[to_idx]
        if from_idx in connections:
            raise ValueError('Modules are already connected')
        connections.append(from_idx)
        to_module.incoming_links = connections

    def chunks(self):
        """Generate chunks necessary to encode project as a .sunvox file"""
        yield self.MAGIC_CHUNK
        yield (b'VERS', pack('BBBB', *reversed(self.sunvox_version)))
        yield (b'BVER', pack('BBBB', *reversed(self.based_on_version)))
        yield (b'BPM ', pack('<I', self.initial_bpm))
        yield (b'SPED', pack('<I', self.initial_tpl))
        yield (b'GVOL', pack('<I', self.global_volume))
        yield (b'NAME', self.name.encode(ENCODING) + b'\0')
        yield (b'MSCL', pack('<I', self.modules_scale))
        yield (b'MZOO', pack('<I', self.modules_zoom))
        yield (b'MXOF', pack('<i', self.modules_x_offset))
        yield (b'MYOF', pack('<i', self.modules_y_offset))
        yield (b'LMSK', pack('<I', self.modules_layer_mask))
        yield (b'CURL', pack('<I', self.modules_current_layer))
        yield (b'TIME', pack('<i', self.timeline_position))
        yield (b'SELS', pack('<I', self.selected_module))
        yield (b'LGEN', pack('<I', 1))  # ???
        yield (b'PATN', pack('<I', self.current_pattern))
        yield (b'PATT', pack('<I', self.current_track))
        yield (b'PATL', pack('<I', self.current_line))
        for i, module in enumerate(self.modules):
            if module is not None:
                for chunk in module.chunks():
                    yield chunk
                connections = self.module_connections[i]
                if len(connections) > 0:
                    connections.append(-1)
                    structure = '<' + 'i' * len(connections)
                    links = pack(structure, *connections)
                else:
                    links = b''
                yield (b'SLNK', links)
                for name in module.controllers:
                    raw_value = module.get_raw(name)
                    yield (b'CVAL', pack('<I', raw_value))
                if len(module.controllers) > 0:
                    yield (b'CMID', b'\0\0\0\0\0\0\0\0' * len(module.controllers))
            yield (b'SEND', b'')

    def module_index(self, module):
        """Return the index of the given module."""
        return self.modules.index(module)

    def new_module(self, cls, *args, **kw):
        """Construct and return a new module attached to this project."""
        module = cls(*args, **kw)
        self.attach_module(module)
        return module

    def read(self):
        with BytesIO() as file:
            self.write_to(file)
            return file.getvalue()

    def write_to(self, file):
        for chunk in self.chunks():
            write_chunk(file, *chunk)
