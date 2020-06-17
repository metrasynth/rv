from rv.controller import Controller, DependentRange, Range, WarnOnlyRange
from rv.modules import Behavior as B, Module
from rv.modules.base.vibrato import BaseVibrato


class Vibrato(BaseVibrato, Module):

    flags = 0x000451

    behaviors = {B.receives_audio, B.sends_audio}

    Channels = BaseVibrato.Channels
    FrequencyUnit = BaseVibrato.FrequencyUnit

    freq_ranges = {
        FrequencyUnit.hz_64: WarnOnlyRange(1, 2048),
        FrequencyUnit.ms: WarnOnlyRange(1, 4000),
        FrequencyUnit.hz: WarnOnlyRange(1, 16384),
        FrequencyUnit.tick: WarnOnlyRange(1, 2048),
        FrequencyUnit.line: WarnOnlyRange(1, 2048),
        FrequencyUnit.line_2: WarnOnlyRange(1, 2048),
        FrequencyUnit.line_3: WarnOnlyRange(1, 2048),
    }

    volume = Controller((0, 256), 256)
    amplitude = Controller((0, 256), 16)
    freq = Controller(
        DependentRange("frequency_unit", freq_ranges, Range(1, 2048)), 256
    )
    channels = Controller(Channels, Channels.stereo)
    set_phase = Controller((0, 256), 0)  # used to reset module
    frequency_unit = Controller(FrequencyUnit, FrequencyUnit.hz_64)
    exponential_amplitude = Controller(bool, False)
