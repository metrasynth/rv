# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for PitchDetector
This file was auto-generated by genrv.
"""
from enum import IntEnum

from rv.controller import Controller


class BasePitchDetector:
    name = "PitchDetector"
    mtype = "Pitch Detector"
    mgroup = "Misc"
    flags = 8785985

    class Algorithm(IntEnum):
        zero_crossing = 0
        autocorrelation = 1
        cepstrum = 2

    class RollOff(IntEnum):
        db_12 = 0
        db_24 = 1
        db_36 = 2
        db_48 = 3

    class SampleRate(IntEnum):
        hz_12 = 0
        hz_24 = 1
        hz_44 = 2

    class Buffer(IntEnum):
        ms_5m = 0
        ms_10 = 1
        ms_21 = 2
        ms_42 = 3
        ms_85 = 4

    algorithm = Controller(Algorithm, Algorithm.autocorrelation)
    threshold = Controller((0, 10000), 80)
    gain = Controller((0, 256), 0)
    microtones = Controller(bool, True)
    detector_finetune = Controller((-256, 256), 0)
    lp_filter_freq_hz = Controller((0, 4000), 1000)
    lp_filter_rolloff = Controller(RollOff, RollOff.db_12)
    alg_1_2_sample_rate = Controller(SampleRate, SampleRate.hz_12)
    alg_1_2_buffer = Controller(Buffer, Buffer.ms_21)
    alg_1_2_buffer_overlap_pct = Controller((0, 100), 50)
    alg_1_sensitivity = Controller((0, 100), 10)
    record_notes = Controller(bool, False)
