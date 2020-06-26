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
import { SpectraVoiceBehavior } from "./spectraVoiceBehavior"
export namespace SpectraVoice {
  export const enum Mode {
    // noinspection JSUnusedGlobalSymbols
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3,
    HqSpline = 4,
  }
  export const enum HarmonicType {
    // noinspection JSUnusedGlobalSymbols
    Hsin = 0,
    Rect = 1,
    Org1 = 2,
    Org2 = 3,
    Org3 = 4,
    Org4 = 5,
    Sin = 6,
    Random = 7,
    Triangle1 = 8,
    Triangle2 = 9,
    Overtones1 = 10,
    Overtones2 = 11,
    Overtones3 = 12,
    Overtones4 = 13,
  }
  interface SpectraVoiceControllerValues extends ControllerValues {
    volume: number
    panning: number
    attack: number
    release: number
    polyphonyCh: number
    mode: Mode
    sustain: boolean
    spectrumResolution: number
    harmonic: number
    hFreqHz: number
    hVolume: number
    hWidth: number
    hType: HarmonicType
  }
  class SpectraVoiceControllers implements Controllers {
    constructor(readonly controllerValues: SpectraVoiceControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get volume(): number {
      return this.controllerValues.volume
    }
    // noinspection JSUnusedGlobalSymbols
    set volume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.volume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get panning(): number {
      return this.controllerValues.panning + -128
    }
    // noinspection JSUnusedGlobalSymbols
    set panning(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -128), 128)
      controllerValues.panning = newValue - -128
    }
    // noinspection JSUnusedGlobalSymbols
    get attack(): number {
      return this.controllerValues.attack
    }
    // noinspection JSUnusedGlobalSymbols
    set attack(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.attack = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get release(): number {
      return this.controllerValues.release
    }
    // noinspection JSUnusedGlobalSymbols
    set release(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.release = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get polyphonyCh(): number {
      return this.controllerValues.polyphonyCh
    }
    // noinspection JSUnusedGlobalSymbols
    set polyphonyCh(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 1), 32)
      controllerValues.polyphonyCh = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get mode(): Mode {
      return this.controllerValues.mode
    }
    // noinspection JSUnusedGlobalSymbols
    set mode(newValue: Mode) {
      const { controllerValues } = this
      controllerValues.mode = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get sustain(): boolean {
      return this.controllerValues.sustain
    }
    // noinspection JSUnusedGlobalSymbols
    set sustain(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.sustain = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get spectrumResolution(): number {
      return this.controllerValues.spectrumResolution
    }
    // noinspection JSUnusedGlobalSymbols
    set spectrumResolution(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 5)
      controllerValues.spectrumResolution = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get harmonic(): number {
      return this.controllerValues.harmonic
    }
    // noinspection JSUnusedGlobalSymbols
    set harmonic(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 15)
      controllerValues.harmonic = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get hFreqHz(): number {
      return this.controllerValues.hFreqHz
    }
    // noinspection JSUnusedGlobalSymbols
    set hFreqHz(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 22050)
      controllerValues.hFreqHz = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get hVolume(): number {
      return this.controllerValues.hVolume
    }
    // noinspection JSUnusedGlobalSymbols
    set hVolume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 255)
      controllerValues.hVolume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get hWidth(): number {
      return this.controllerValues.hWidth
    }
    // noinspection JSUnusedGlobalSymbols
    set hWidth(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 255)
      controllerValues.hWidth = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get hType(): HarmonicType {
      return this.controllerValues.hType
    }
    // noinspection JSUnusedGlobalSymbols
    set hType(newValue: HarmonicType) {
      const { controllerValues } = this
      controllerValues.hType = newValue
    }
  }
  interface SpectraVoiceControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    panning: ControllerMidiMap
    attack: ControllerMidiMap
    release: ControllerMidiMap
    polyphonyCh: ControllerMidiMap
    mode: ControllerMidiMap
    sustain: ControllerMidiMap
    spectrumResolution: ControllerMidiMap
    harmonic: ControllerMidiMap
    hFreqHz: ControllerMidiMap
    hVolume: ControllerMidiMap
    hWidth: ControllerMidiMap
    hType: ControllerMidiMap
  }
  interface SpectraVoiceOptionValues extends OptionValues {}
  class SpectraVoiceOptions implements Options {
    constructor(readonly optionValues: SpectraVoiceOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    readonly name = "SpectraVoice"
    readonly typeName = "SpectraVoice"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.panning = val
      },
      (val: number) => {
        this.controllerValues.attack = val
      },
      (val: number) => {
        this.controllerValues.release = val
      },
      (val: number) => {
        this.controllerValues.polyphonyCh = val
      },
      (val: number) => {
        this.controllerValues.mode = val
      },
      (val: number) => {
        this.controllerValues.sustain = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.spectrumResolution = val
      },
      (val: number) => {
        this.controllerValues.harmonic = val
      },
      (val: number) => {
        this.controllerValues.hFreqHz = val
      },
      (val: number) => {
        this.controllerValues.hVolume = val
      },
      (val: number) => {
        this.controllerValues.hWidth = val
      },
      (val: number) => {
        this.controllerValues.hType = val
      },
    ]
    readonly controllerValues: SpectraVoiceControllerValues = {
      volume: 128,
      panning: 0,
      attack: 10,
      release: 512,
      polyphonyCh: 8,
      mode: Mode.HqSpline,
      sustain: true,
      spectrumResolution: 1,
      harmonic: 0,
      hFreqHz: 1098,
      hVolume: 255,
      hWidth: 3,
      hType: HarmonicType.Hsin,
    }
    readonly controllers: SpectraVoiceControllers = new SpectraVoiceControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: SpectraVoiceControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      panning: new ControllerMidiMap(),
      attack: new ControllerMidiMap(),
      release: new ControllerMidiMap(),
      polyphonyCh: new ControllerMidiMap(),
      mode: new ControllerMidiMap(),
      sustain: new ControllerMidiMap(),
      spectrumResolution: new ControllerMidiMap(),
      harmonic: new ControllerMidiMap(),
      hFreqHz: new ControllerMidiMap(),
      hVolume: new ControllerMidiMap(),
      hWidth: new ControllerMidiMap(),
      hType: new ControllerMidiMap(),
    }
    readonly optionValues: SpectraVoiceOptionValues = {}
    readonly options: SpectraVoiceOptions = new SpectraVoiceOptions(this.optionValues)
    readonly o = this.options
    behavior?: SpectraVoiceBehavior
    constructor() {
      super()
      this.behavior = new SpectraVoiceBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.panning
      yield cv.attack
      yield cv.release
      yield cv.polyphonyCh
      yield cv.mode
      yield Number(cv.sustain)
      yield cv.spectrumResolution
      yield cv.harmonic
      yield cv.hFreqHz
      yield cv.hVolume
      yield cv.hWidth
      yield cv.hType
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.panning = midiMaps[1]
      this.midiMaps.attack = midiMaps[2]
      this.midiMaps.release = midiMaps[3]
      this.midiMaps.polyphonyCh = midiMaps[4]
      this.midiMaps.mode = midiMaps[5]
      this.midiMaps.sustain = midiMaps[6]
      this.midiMaps.spectrumResolution = midiMaps[7]
      this.midiMaps.harmonic = midiMaps[8]
      this.midiMaps.hFreqHz = midiMaps[9]
      this.midiMaps.hVolume = midiMaps[10]
      this.midiMaps.hWidth = midiMaps[11]
      this.midiMaps.hType = midiMaps[12]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.panning)
      a.push(this.midiMaps.attack)
      a.push(this.midiMaps.release)
      a.push(this.midiMaps.polyphonyCh)
      a.push(this.midiMaps.mode)
      a.push(this.midiMaps.sustain)
      a.push(this.midiMaps.spectrumResolution)
      a.push(this.midiMaps.harmonic)
      a.push(this.midiMaps.hFreqHz)
      a.push(this.midiMaps.hVolume)
      a.push(this.midiMaps.hWidth)
      a.push(this.midiMaps.hType)
      return a
    }
  }
}
