# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for PitchShifter
This file was auto-generated by genrv.
"""
from enum import Enum

from rv.controller import Controller


class BasePitchShifter:
    name = "PitchShifter"
    mtype = "Pitch shifter"
    mgroup = "Effect"

    class Mode(Enum):
        hq = 0
        hq_mono = 1
        lq = 2
        lq_mono = 3

    volume = Controller((0, 512), 256)
    pitch = Controller((-600, 600), 0)
    pitch_scale = Controller((0, 200), 100)
    feedback = Controller((0, 256), 0)
    grain_size = Controller((0, 256), 64)
    mode = Controller(Mode, Mode.hq)