# -- DO NOT EDIT THIS FILE DIRECTLY --
"""
Base class for VorbisPlayer
This file was auto-generated by genrv.
"""
from rv.controller import Controller, NoOffsetRange


class BaseVorbisPlayer:
    name = "VorbisPlayer"
    mtype = "Vorbis player"
    mgroup = "Synth"
    flags = 32841
    volume = Controller((0, 512), 256)
    original_speed = Controller(bool, True)
    finetune = Controller(NoOffsetRange(-128, 128), 0)
    transpose = Controller((-128, 128), 0)
    interpolation = Controller(bool, True)
    polyphony_ch = Controller((1, 4), 1)
    repeat = Controller(bool, False)
