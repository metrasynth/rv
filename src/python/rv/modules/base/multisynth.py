# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for MultiSynth
This file was auto-generated by genrv.
"""
from enum import IntEnum

from rv.chunks import ArrayChunk
from rv.controller import CompactRange, Controller
from rv.option import Option


class BaseMultiSynth:
    name = "MultiSynth"
    mtype = "MultiSynth"
    mgroup = "Misc"
    flags = 16912457

    class ActiveCurve(IntEnum):
        note_velocity = 0
        velocity_velocity = 1
        note_pitch = 2

    transpose = Controller(CompactRange(-128, 128), 0)
    random_pitch = Controller((0, 4096), 0)
    velocity = Controller((0, 256), 256)
    finetune = Controller((-256, 256), 0)
    random_phase = Controller((0, 32768), 0)
    random_velocity = Controller((0, 32768), 0)
    phase = Controller((0, 32768), 0)
    curve2_influence = Controller((0, 256), 256)
    use_static_note_C5 = Option(
        name="use_static_note_C5", number=127, byte=0, bit=0, size=1, default=False
    )
    ignore_notes_with_zero_velocity = Option(
        name="ignore_notes_with_zero_velocity",
        number=126,
        byte=1,
        bit=0,
        size=1,
        default=False,
    )
    active_curve = Option(
        name="active_curve", number=125, byte=2, bit=0, size=2, default="note_velocity"
    )
    trigger = Option(name="trigger", number=124, byte=3, bit=0, size=1, default=False)
    generate_missed_note_off_commands = Option(
        name="generate_missed_note_off_commands",
        number=123,
        byte=4,
        bit=0,
        size=1,
        default=False,
    )
    round_note_x = Option(
        name="round_note_x",
        number=122,
        byte=4,
        bit=1,
        size=1,
        exclusive_of=["round_pitch_y"],
        default=False,
    )
    round_pitch_y = Option(
        name="round_pitch_y",
        number=121,
        byte=4,
        bit=2,
        size=1,
        exclusive_of=["round_note_x"],
        default=False,
    )
    record_notes_to_scale_curve = Option(
        name="record_notes_to_scale_curve",
        number=120,
        byte=4,
        bit=3,
        size=1,
        default=False,
    )
    out_note_eq_out_note_minus_in_note_plus_C5 = Option(
        name="out_note_eq_out_note_minus_in_note_plus_C5",
        number=118,
        byte=4,
        bit=6,
        size=1,
        default=False,
    )
    out_port_eq_note_mod_num_of_outs = Option(
        name="out_port_eq_note_mod_num_of_outs",
        number=117,
        byte=4,
        bit=7,
        size=1,
        exclusive_of=["out_port_eq_channel_mod_num_of_outs"],
        default=False,
    )
    out_port_eq_channel_mod_num_of_outs = Option(
        name="out_port_eq_channel_mod_num_of_outs",
        number=116,
        byte=4,
        bit=8,
        size=1,
        exclusive_of=["out_port_eq_note_mod_num_of_outs"],
        default=False,
    )

    class note_velocity_curve_chunk(ArrayChunk):
        chnm = 0
        length = 128
        type = "B"
        element_size = 1
        min_value = 0
        max_value = 255
        default = 255

    class velocity_velocity_curve_chunk(ArrayChunk):
        chnm = 2
        length = 257
        type = "B"
        element_size = 1
        min_value = 0
        max_value = 255
        default = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            90,
            91,
            92,
            93,
            94,
            95,
            96,
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123,
            124,
            125,
            126,
            127,
            128,
            129,
            130,
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            141,
            142,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
            157,
            158,
            159,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            174,
            175,
            176,
            177,
            178,
            179,
            180,
            181,
            182,
            183,
            184,
            185,
            186,
            187,
            188,
            189,
            190,
            191,
            192,
            193,
            194,
            195,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            210,
            211,
            212,
            213,
            214,
            215,
            216,
            217,
            218,
            219,
            220,
            221,
            222,
            223,
            224,
            225,
            226,
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            234,
            235,
            236,
            237,
            238,
            239,
            240,
            241,
            242,
            243,
            244,
            245,
            246,
            247,
            248,
            249,
            250,
            251,
            252,
            253,
            254,
            255,
            255,
        ]

    class note_pitch_curve_chunk(ArrayChunk):
        chnm = 3
        length = 128
        type = "H"
        element_size = 2
        min_value = 0
        max_value = 65535
        default = [
            16384,
            16640,
            16896,
            17152,
            17408,
            17664,
            17920,
            18176,
            18432,
            18688,
            18944,
            19200,
            19456,
            19712,
            19968,
            20224,
            20480,
            20736,
            20992,
            21248,
            21504,
            21760,
            22016,
            22272,
            22528,
            22784,
            23040,
            23296,
            23552,
            23808,
            24064,
            24320,
            24576,
            24832,
            25088,
            25344,
            25600,
            25856,
            26112,
            26368,
            26624,
            26880,
            27136,
            27392,
            27648,
            27904,
            28160,
            28416,
            28672,
            28928,
            29184,
            29440,
            29696,
            29952,
            30208,
            30464,
            30720,
            30976,
            31232,
            31488,
            31744,
            32000,
            32256,
            32512,
            32768,
            33024,
            33280,
            33536,
            33792,
            34048,
            34304,
            34560,
            34816,
            35072,
            35328,
            35584,
            35840,
            36096,
            36352,
            36608,
            36864,
            37120,
            37376,
            37632,
            37888,
            38144,
            38400,
            38656,
            38912,
            39168,
            39424,
            39680,
            39936,
            40192,
            40448,
            40704,
            40960,
            41216,
            41472,
            41728,
            41984,
            42240,
            42496,
            42752,
            43008,
            43264,
            43520,
            43776,
            44032,
            44288,
            44544,
            44800,
            45056,
            45312,
            45568,
            45824,
            46080,
            46336,
            46592,
            46848,
            47104,
            47360,
            47616,
            47872,
            48128,
            48384,
            48640,
            48896,
        ]
