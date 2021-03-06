# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for Compressor
This file was auto-generated by genrv.
"""
from enum import IntEnum

from rv.controller import Controller


class BaseCompressor:
    name = "Compressor"
    mtype = "Compressor"
    mgroup = "Effect"
    flags = 8273

    class Mode(IntEnum):
        peak = 0
        rms = 1
        peak_zero_latency = 2

    volume = Controller((0, 512), 256)
    threshold = Controller((0, 512), 256)
    slope_pct = Controller((0, 200), 100)
    attack_ms = Controller((0, 500), 1)
    release_ms = Controller((1, 1000), 300)
    mode = Controller(Mode, Mode.peak)
    sidechain_input = Controller((0, 32), 0)
