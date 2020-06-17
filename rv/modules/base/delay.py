# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for Delay

This file was auto-generated by rvoxgen.
"""
from enum import Enum

from rv.controller import Controller


class BaseDelay:
    name = "Delay"
    mtype = "Delay"
    mgroup = "Effect"

    class Channels(Enum):
        stereo = 0
        mono = 1

    class DelayUnits(Enum):
        sec_16384 = 0
        ms = 1
        hz = 2
        tick = 3
        line = 4
        line_2 = 5
        line_3 = 6

    dry = Controller((0, 512), 256)
    wet = Controller((0, 512), 256)
    delay_l = Controller((0, 256), 128)
    delay_r = Controller((0, 256), 160)
    volume_l = Controller((0, 256), 256)
    volume_r = Controller((0, 256), 256)
    channels = Controller(Channels, Channels.stereo)
    inverse = Controller(bool, False)
    delay_units = Controller(DelayUnits, DelayUnits.sec_16384)
