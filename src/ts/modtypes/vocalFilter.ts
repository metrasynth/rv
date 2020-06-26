/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { ModuleBase } from "./moduleBase"
import {
  ControllerValues,
  Controllers,
  ModuleType,
  OptionValues,
  Options,
} from "./moduleType"
import { VocalFilterBehavior } from "./vocalFilterBehavior"
export namespace VocalFilter {
  export const enum VoiceType {
    // noinspection JSUnusedGlobalSymbols
    Soprano = 0,
    Alto = 1,
    Tenor = 2,
    Bass = 3,
  }
  export const enum Channels {
    // noinspection JSUnusedGlobalSymbols
    Stereo = 0,
    Mono = 1,
  }
  interface VocalFilterControllerValues extends ControllerValues {
    volume: number
    formantWidthHz: number
    intensity: number
    formants: number
    vowel: number
    voiceType: VoiceType
    channels: Channels
  }
  class VocalFilterControllers implements Controllers {
    constructor(readonly controllerValues: VocalFilterControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get volume(): number {
      return this.controllerValues.volume
    }
    // noinspection JSUnusedGlobalSymbols
    set volume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.volume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get formantWidthHz(): number {
      return this.controllerValues.formantWidthHz
    }
    // noinspection JSUnusedGlobalSymbols
    set formantWidthHz(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.formantWidthHz = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get intensity(): number {
      return this.controllerValues.intensity
    }
    // noinspection JSUnusedGlobalSymbols
    set intensity(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.intensity = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get formants(): number {
      return this.controllerValues.formants
    }
    // noinspection JSUnusedGlobalSymbols
    set formants(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 1), 5)
      controllerValues.formants = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get vowel(): number {
      return this.controllerValues.vowel
    }
    // noinspection JSUnusedGlobalSymbols
    set vowel(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.vowel = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get voiceType(): VoiceType {
      return this.controllerValues.voiceType
    }
    // noinspection JSUnusedGlobalSymbols
    set voiceType(newValue: VoiceType) {
      const { controllerValues } = this
      controllerValues.voiceType = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get channels(): Channels {
      return this.controllerValues.channels
    }
    // noinspection JSUnusedGlobalSymbols
    set channels(newValue: Channels) {
      const { controllerValues } = this
      controllerValues.channels = newValue
    }
  }
  interface VocalFilterControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    formantWidthHz: ControllerMidiMap
    intensity: ControllerMidiMap
    formants: ControllerMidiMap
    vowel: ControllerMidiMap
    voiceType: ControllerMidiMap
    channels: ControllerMidiMap
  }
  interface VocalFilterOptionValues extends OptionValues {}
  class VocalFilterOptions implements Options {
    constructor(readonly optionValues: VocalFilterOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    readonly name = "VocalFilter"
    readonly typeName = "Vocal filter"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.formantWidthHz = val
      },
      (val: number) => {
        this.controllerValues.intensity = val
      },
      (val: number) => {
        this.controllerValues.formants = val
      },
      (val: number) => {
        this.controllerValues.vowel = val
      },
      (val: number) => {
        this.controllerValues.voiceType = val
      },
      (val: number) => {
        this.controllerValues.channels = val
      },
    ]
    readonly controllerValues: VocalFilterControllerValues = {
      volume: 256,
      formantWidthHz: 128,
      intensity: 128,
      formants: 5,
      vowel: 0,
      voiceType: VoiceType.Soprano,
      channels: Channels.Stereo,
    }
    readonly controllers: VocalFilterControllers = new VocalFilterControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: VocalFilterControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      formantWidthHz: new ControllerMidiMap(),
      intensity: new ControllerMidiMap(),
      formants: new ControllerMidiMap(),
      vowel: new ControllerMidiMap(),
      voiceType: new ControllerMidiMap(),
      channels: new ControllerMidiMap(),
    }
    readonly optionValues: VocalFilterOptionValues = {}
    readonly options: VocalFilterOptions = new VocalFilterOptions(this.optionValues)
    readonly o = this.options
    behavior?: VocalFilterBehavior
    constructor() {
      super()
      this.behavior = new VocalFilterBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.formantWidthHz
      yield cv.intensity
      yield cv.formants
      yield cv.vowel
      yield cv.voiceType
      yield cv.channels
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.formantWidthHz = midiMaps[1]
      this.midiMaps.intensity = midiMaps[2]
      this.midiMaps.formants = midiMaps[3]
      this.midiMaps.vowel = midiMaps[4]
      this.midiMaps.voiceType = midiMaps[5]
      this.midiMaps.channels = midiMaps[6]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.formantWidthHz)
      a.push(this.midiMaps.intensity)
      a.push(this.midiMaps.formants)
      a.push(this.midiMaps.vowel)
      a.push(this.midiMaps.voiceType)
      a.push(this.midiMaps.channels)
      return a
    }
  }
}
