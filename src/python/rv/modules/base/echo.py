# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for Echo
This file was auto-generated by genrv.
"""
from enum import Enum

from rv.controller import Controller


class BaseEcho:
    name = "Echo"
    mtype = "Echo"
    mgroup = "Effect"

    class Channels(Enum):
        mono = 0
        stereo = 1

    class DelayUnit(Enum):
        sec_256 = 0
        ms = 1
        hz = 2
        tick = 3
        line = 4
        line_2 = 5
        line_3 = 6

    dry = Controller((0, 256), 256)
    wet = Controller((0, 256), 128)
    feedback = Controller((0, 256), 128)
    delay = Controller((0, 256), 256)
    channels = Controller(Channels, Channels.stereo)
    delay_unit = Controller(DelayUnit, DelayUnit.sec_256)