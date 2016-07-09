from enum import IntEnum

from rv.structure.controller import Controller, Range
from rv.structure.module import GenericModule


class Channels(IntEnum):

    MONO = 0
    STEREO = 1


class InputModule(GenericModule):

    class controllers(object):
        volume = Controller(0x01, Range(0, 1024))
        channels = Controller(0x02, Channels)
