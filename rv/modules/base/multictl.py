# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for MultiCtl
This file was auto-generated by rvoxgen.
"""
from rv.chunks import ArrayChunk
from rv.controller import Controller


class BaseMultiCtl:
    name = "MultiCtl"
    mtype = "MultiCtl"
    mgroup = "Misc"
    value = Controller((0, 32768), 0)
    gain = Controller((0, 1024), 256)
    quantization = Controller((0, 32768), 32768)
    out_offset = Controller((-16384, 16384), 0)
    response = Controller((0, 1000), 1000)
    sample_rate_hz = Controller((1, 32768), 150)

    class mappings_chunk(ArrayChunk):
        chnm = 0
        length = 16
        type = None
        element_size = None
        default = {"min": 0, "max": 32768, "controller": 0}

    class curve_chunk(ArrayChunk):
        chnm = 1
        length = 257
        type = "H"
        element_size = 2
        min_value = 0
        max_value = 32768
        default = [
            0,
            128,
            256,
            384,
            512,
            640,
            768,
            896,
            1024,
            1152,
            1280,
            1408,
            1536,
            1664,
            1792,
            1920,
            2048,
            2176,
            2304,
            2432,
            2560,
            2688,
            2816,
            2944,
            3072,
            3200,
            3328,
            3456,
            3584,
            3712,
            3840,
            3968,
            4096,
            4224,
            4352,
            4480,
            4608,
            4736,
            4864,
            4992,
            5120,
            5248,
            5376,
            5504,
            5632,
            5760,
            5888,
            6016,
            6144,
            6272,
            6400,
            6528,
            6656,
            6784,
            6912,
            7040,
            7168,
            7296,
            7424,
            7552,
            7680,
            7808,
            7936,
            8064,
            8192,
            8320,
            8448,
            8576,
            8704,
            8832,
            8960,
            9088,
            9216,
            9344,
            9472,
            9600,
            9728,
            9856,
            9984,
            10112,
            10240,
            10368,
            10496,
            10624,
            10752,
            10880,
            11008,
            11136,
            11264,
            11392,
            11520,
            11648,
            11776,
            11904,
            12032,
            12160,
            12288,
            12416,
            12544,
            12672,
            12800,
            12928,
            13056,
            13184,
            13312,
            13440,
            13568,
            13696,
            13824,
            13952,
            14080,
            14208,
            14336,
            14464,
            14592,
            14720,
            14848,
            14976,
            15104,
            15232,
            15360,
            15488,
            15616,
            15744,
            15872,
            16000,
            16128,
            16256,
            16384,
            16512,
            16640,
            16768,
            16896,
            17024,
            17152,
            17280,
            17408,
            17536,
            17664,
            17792,
            17920,
            18048,
            18176,
            18304,
            18432,
            18560,
            18688,
            18816,
            18944,
            19072,
            19200,
            19328,
            19456,
            19584,
            19712,
            19840,
            19968,
            20096,
            20224,
            20352,
            20480,
            20608,
            20736,
            20864,
            20992,
            21120,
            21248,
            21376,
            21504,
            21632,
            21760,
            21888,
            22016,
            22144,
            22272,
            22400,
            22528,
            22656,
            22784,
            22912,
            23040,
            23168,
            23296,
            23424,
            23552,
            23680,
            23808,
            23936,
            24064,
            24192,
            24320,
            24448,
            24576,
            24704,
            24832,
            24960,
            25088,
            25216,
            25344,
            25472,
            25600,
            25728,
            25856,
            25984,
            26112,
            26240,
            26368,
            26496,
            26624,
            26752,
            26880,
            27008,
            27136,
            27264,
            27392,
            27520,
            27648,
            27776,
            27904,
            28032,
            28160,
            28288,
            28416,
            28544,
            28672,
            28800,
            28928,
            29056,
            29184,
            29312,
            29440,
            29568,
            29696,
            29824,
            29952,
            30080,
            30208,
            30336,
            30464,
            30592,
            30720,
            30848,
            30976,
            31104,
            31232,
            31360,
            31488,
            31616,
            31744,
            31872,
            32000,
            32128,
            32256,
            32384,
            32512,
            32640,
            32768,
        ]
