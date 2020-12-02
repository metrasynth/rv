# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for Distortion
This file was auto-generated by genrv.
"""
from enum import Enum

from rv.controller import Controller


class BaseDistortion:
    name = "Distortion"
    mtype = "Distortion"
    mgroup = "Effect"
    flags = 81

    class Type(Enum):
        lim = 0
        clipping = 0
        sat = 1
        foldback = 1
        foldback2 = 2
        foldback3 = 3
        overflow = 4

    volume = Controller((0, 256), 128)
    type = Controller(Type, Type.lim)
    power = Controller((0, 256), 0)
    bit_depth = Controller((1, 16), 16)
    freq_hz = Controller((0, 44100), 44100)
    noise = Controller((0, 256), 0)
