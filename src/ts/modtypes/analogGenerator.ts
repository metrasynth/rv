/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk"
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { Project } from "../project"
import { ModuleBase } from "./moduleBase"
import {
  ControllerValues,
  Controllers,
  ModuleType,
  OptionValues,
  Options,
} from "./moduleType"
import { AnalogGeneratorBehavior } from "./analogGeneratorBehavior"
export namespace AnalogGenerator {
  export const enum Mode {
    // noinspection JSUnusedGlobalSymbols
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3,
  }
  export const enum Waveform {
    // noinspection JSUnusedGlobalSymbols
    Triangle = 0,
    Saw = 1,
    Square = 2,
    Noise = 3,
    Drawn = 4,
    Sin = 5,
    Hsin = 6,
    Asin = 7,
    DrawnSpline = 8,
    NoiseSpline = 9,
    WhiteNoise = 10,
    PinkNoise = 11,
    RedNoise = 12,
    BlueNoise = 13,
    VioletNoise = 14,
    GreyNoise = 15,
  }
  export const enum Filter {
    // noinspection JSUnusedGlobalSymbols
    Off = 0,
    Lp_12db = 1,
    Hp_12db = 2,
    Bp_12db = 3,
    Br_12db = 4,
    Lp_24db = 5,
    Hp_24db = 6,
    Bp_24db = 7,
    Br_24db = 8,
  }
  export const enum FilterEnvelope {
    // noinspection JSUnusedGlobalSymbols
    Off = 0,
    SustainOff = 1,
    SustainOn = 2,
  }
  interface AnalogGeneratorControllerValues extends ControllerValues {
    volume: number
    waveform: Waveform
    panning: number
    attack: number
    release: number
    sustain: boolean
    exponentialEnvelope: boolean
    dutyCycle: number
    freq2: number
    filter: Filter
    fFreqHz: number
    fResonance: number
    fExponentialFreq: boolean
    fAttack: number
    fRelease: number
    fEnvelope: FilterEnvelope
    polyphonyCh: number
    mode: Mode
    noise: number
  }
  class AnalogGeneratorControllers implements Controllers {
    constructor(readonly controllerValues: AnalogGeneratorControllerValues) {}
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
    get waveform(): Waveform {
      return this.controllerValues.waveform
    }
    // noinspection JSUnusedGlobalSymbols
    set waveform(newValue: Waveform) {
      const { controllerValues } = this
      controllerValues.waveform = newValue
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
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.attack = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get release(): number {
      return this.controllerValues.release
    }
    // noinspection JSUnusedGlobalSymbols
    set release(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.release = newValue
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
    get exponentialEnvelope(): boolean {
      return this.controllerValues.exponentialEnvelope
    }
    // noinspection JSUnusedGlobalSymbols
    set exponentialEnvelope(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.exponentialEnvelope = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get dutyCycle(): number {
      return this.controllerValues.dutyCycle
    }
    // noinspection JSUnusedGlobalSymbols
    set dutyCycle(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 1024)
      controllerValues.dutyCycle = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get freq2(): number {
      return this.controllerValues.freq2
    }
    // noinspection JSUnusedGlobalSymbols
    set freq2(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 2000)
      controllerValues.freq2 = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get filter(): Filter {
      return this.controllerValues.filter
    }
    // noinspection JSUnusedGlobalSymbols
    set filter(newValue: Filter) {
      const { controllerValues } = this
      controllerValues.filter = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get fFreqHz(): number {
      return this.controllerValues.fFreqHz
    }
    // noinspection JSUnusedGlobalSymbols
    set fFreqHz(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 14000)
      controllerValues.fFreqHz = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get fResonance(): number {
      return this.controllerValues.fResonance
    }
    // noinspection JSUnusedGlobalSymbols
    set fResonance(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 1530)
      controllerValues.fResonance = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get fExponentialFreq(): boolean {
      return this.controllerValues.fExponentialFreq
    }
    // noinspection JSUnusedGlobalSymbols
    set fExponentialFreq(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.fExponentialFreq = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get fAttack(): number {
      return this.controllerValues.fAttack
    }
    // noinspection JSUnusedGlobalSymbols
    set fAttack(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.fAttack = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get fRelease(): number {
      return this.controllerValues.fRelease
    }
    // noinspection JSUnusedGlobalSymbols
    set fRelease(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.fRelease = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get fEnvelope(): FilterEnvelope {
      return this.controllerValues.fEnvelope
    }
    // noinspection JSUnusedGlobalSymbols
    set fEnvelope(newValue: FilterEnvelope) {
      const { controllerValues } = this
      controllerValues.fEnvelope = newValue
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
    get noise(): number {
      return this.controllerValues.noise
    }
    // noinspection JSUnusedGlobalSymbols
    set noise(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.noise = newValue
    }
  }
  interface AnalogGeneratorControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    waveform: ControllerMidiMap
    panning: ControllerMidiMap
    attack: ControllerMidiMap
    release: ControllerMidiMap
    sustain: ControllerMidiMap
    exponentialEnvelope: ControllerMidiMap
    dutyCycle: ControllerMidiMap
    freq2: ControllerMidiMap
    filter: ControllerMidiMap
    fFreqHz: ControllerMidiMap
    fResonance: ControllerMidiMap
    fExponentialFreq: ControllerMidiMap
    fAttack: ControllerMidiMap
    fRelease: ControllerMidiMap
    fEnvelope: ControllerMidiMap
    polyphonyCh: ControllerMidiMap
    mode: ControllerMidiMap
    noise: ControllerMidiMap
  }
  interface AnalogGeneratorOptionValues extends OptionValues {
    volumeEnvelopeScalingPerKey: boolean
    filterEnvelopeScalingPerKey: boolean
    volumeScalingPerKey: boolean
    filterFreqScalingPerKey: boolean
    velocityDependentFilterFrequency: boolean
    frequencyDiv_2: boolean
    smoothFrequencyChange: boolean
    filterFreqScalingPerKeyReverse: boolean
    retainPhase: boolean
    randomPhase: boolean
    filterFreqEqNoteFreq: boolean
    velocityDependentFilterResonance: boolean
    trueZeroAttackRelease: boolean
  }
  class AnalogGeneratorOptions implements Options {
    constructor(readonly optionValues: AnalogGeneratorOptionValues) {}
    // noinspection JSUnusedGlobalSymbols
    get volumeEnvelopeScalingPerKey(): boolean {
      return this.optionValues.volumeEnvelopeScalingPerKey
    }
    // noinspection JSUnusedGlobalSymbols
    set volumeEnvelopeScalingPerKey(newValue: boolean) {
      this.optionValues.volumeEnvelopeScalingPerKey = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get filterEnvelopeScalingPerKey(): boolean {
      return this.optionValues.filterEnvelopeScalingPerKey
    }
    // noinspection JSUnusedGlobalSymbols
    set filterEnvelopeScalingPerKey(newValue: boolean) {
      this.optionValues.filterEnvelopeScalingPerKey = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get volumeScalingPerKey(): boolean {
      return this.optionValues.volumeScalingPerKey
    }
    // noinspection JSUnusedGlobalSymbols
    set volumeScalingPerKey(newValue: boolean) {
      this.optionValues.volumeScalingPerKey = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get filterFreqScalingPerKey(): boolean {
      return this.optionValues.filterFreqScalingPerKey
    }
    // noinspection JSUnusedGlobalSymbols
    set filterFreqScalingPerKey(newValue: boolean) {
      this.optionValues.filterFreqScalingPerKey = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get velocityDependentFilterFrequency(): boolean {
      return this.optionValues.velocityDependentFilterFrequency
    }
    // noinspection JSUnusedGlobalSymbols
    set velocityDependentFilterFrequency(newValue: boolean) {
      this.optionValues.velocityDependentFilterFrequency = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get frequencyDiv_2(): boolean {
      return this.optionValues.frequencyDiv_2
    }
    // noinspection JSUnusedGlobalSymbols
    set frequencyDiv_2(newValue: boolean) {
      this.optionValues.frequencyDiv_2 = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get smoothFrequencyChange(): boolean {
      return this.optionValues.smoothFrequencyChange
    }
    // noinspection JSUnusedGlobalSymbols
    set smoothFrequencyChange(newValue: boolean) {
      this.optionValues.smoothFrequencyChange = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get filterFreqScalingPerKeyReverse(): boolean {
      return this.optionValues.filterFreqScalingPerKeyReverse
    }
    // noinspection JSUnusedGlobalSymbols
    set filterFreqScalingPerKeyReverse(newValue: boolean) {
      this.optionValues.filterFreqScalingPerKeyReverse = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get retainPhase(): boolean {
      return this.optionValues.retainPhase
    }
    // noinspection JSUnusedGlobalSymbols
    set retainPhase(newValue: boolean) {
      this.optionValues.retainPhase = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get randomPhase(): boolean {
      return this.optionValues.randomPhase
    }
    // noinspection JSUnusedGlobalSymbols
    set randomPhase(newValue: boolean) {
      this.optionValues.randomPhase = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get filterFreqEqNoteFreq(): boolean {
      return this.optionValues.filterFreqEqNoteFreq
    }
    // noinspection JSUnusedGlobalSymbols
    set filterFreqEqNoteFreq(newValue: boolean) {
      this.optionValues.filterFreqEqNoteFreq = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get velocityDependentFilterResonance(): boolean {
      return this.optionValues.velocityDependentFilterResonance
    }
    // noinspection JSUnusedGlobalSymbols
    set velocityDependentFilterResonance(newValue: boolean) {
      this.optionValues.velocityDependentFilterResonance = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get trueZeroAttackRelease(): boolean {
      return this.optionValues.trueZeroAttackRelease
    }
    // noinspection JSUnusedGlobalSymbols
    set trueZeroAttackRelease(newValue: boolean) {
      this.optionValues.trueZeroAttackRelease = newValue
    }
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Analog generator"
    flags = 73
    readonly typeName = "Analog generator"
    readonly optionsChnm = 1
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.waveform = val
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
        this.controllerValues.sustain = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.exponentialEnvelope = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.dutyCycle = val
      },
      (val: number) => {
        this.controllerValues.freq2 = val
      },
      (val: number) => {
        this.controllerValues.filter = val
      },
      (val: number) => {
        this.controllerValues.fFreqHz = val
      },
      (val: number) => {
        this.controllerValues.fResonance = val
      },
      (val: number) => {
        this.controllerValues.fExponentialFreq = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.fAttack = val
      },
      (val: number) => {
        this.controllerValues.fRelease = val
      },
      (val: number) => {
        this.controllerValues.fEnvelope = val
      },
      (val: number) => {
        this.controllerValues.polyphonyCh = val
      },
      (val: number) => {
        this.controllerValues.mode = val
      },
      (val: number) => {
        this.controllerValues.noise = val
      },
    ]
    readonly controllerValues: AnalogGeneratorControllerValues = {
      volume: 80,
      waveform: Waveform.Triangle,
      panning: 0,
      attack: 0,
      release: 0,
      sustain: true,
      exponentialEnvelope: true,
      dutyCycle: 512,
      freq2: 1000,
      filter: Filter.Off,
      fFreqHz: 14000,
      fResonance: 0,
      fExponentialFreq: true,
      fAttack: 0,
      fRelease: 0,
      fEnvelope: FilterEnvelope.Off,
      polyphonyCh: 16,
      mode: Mode.Hq,
      noise: 0,
    }
    readonly controllers: AnalogGeneratorControllers = new AnalogGeneratorControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: AnalogGeneratorControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      waveform: new ControllerMidiMap(),
      panning: new ControllerMidiMap(),
      attack: new ControllerMidiMap(),
      release: new ControllerMidiMap(),
      sustain: new ControllerMidiMap(),
      exponentialEnvelope: new ControllerMidiMap(),
      dutyCycle: new ControllerMidiMap(),
      freq2: new ControllerMidiMap(),
      filter: new ControllerMidiMap(),
      fFreqHz: new ControllerMidiMap(),
      fResonance: new ControllerMidiMap(),
      fExponentialFreq: new ControllerMidiMap(),
      fAttack: new ControllerMidiMap(),
      fRelease: new ControllerMidiMap(),
      fEnvelope: new ControllerMidiMap(),
      polyphonyCh: new ControllerMidiMap(),
      mode: new ControllerMidiMap(),
      noise: new ControllerMidiMap(),
    }
    readonly optionValues: AnalogGeneratorOptionValues = {
      volumeEnvelopeScalingPerKey: false,
      filterEnvelopeScalingPerKey: false,
      volumeScalingPerKey: false,
      filterFreqScalingPerKey: false,
      velocityDependentFilterFrequency: false,
      frequencyDiv_2: false,
      smoothFrequencyChange: true,
      filterFreqScalingPerKeyReverse: false,
      retainPhase: false,
      randomPhase: false,
      filterFreqEqNoteFreq: false,
      velocityDependentFilterResonance: false,
      trueZeroAttackRelease: false,
    }
    readonly options: AnalogGeneratorOptions = new AnalogGeneratorOptions(
      this.optionValues
    )
    readonly o = this.options
    behavior?: AnalogGeneratorBehavior
    constructor() {
      super()
      this.behavior = new AnalogGeneratorBehavior(this)
    }
    attachTo(project: Project): Module {
      return super.attachTo(project) as Module
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.waveform
      yield cv.panning
      yield cv.attack
      yield cv.release
      yield Number(cv.sustain)
      yield Number(cv.exponentialEnvelope)
      yield cv.dutyCycle
      yield cv.freq2
      yield cv.filter
      yield cv.fFreqHz
      yield cv.fResonance
      yield Number(cv.fExponentialFreq)
      yield cv.fAttack
      yield cv.fRelease
      yield cv.fEnvelope
      yield cv.polyphonyCh
      yield cv.mode
      yield cv.noise
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.waveform = midiMaps[1]
      this.midiMaps.panning = midiMaps[2]
      this.midiMaps.attack = midiMaps[3]
      this.midiMaps.release = midiMaps[4]
      this.midiMaps.sustain = midiMaps[5]
      this.midiMaps.exponentialEnvelope = midiMaps[6]
      this.midiMaps.dutyCycle = midiMaps[7]
      this.midiMaps.freq2 = midiMaps[8]
      this.midiMaps.filter = midiMaps[9]
      this.midiMaps.fFreqHz = midiMaps[10]
      this.midiMaps.fResonance = midiMaps[11]
      this.midiMaps.fExponentialFreq = midiMaps[12]
      this.midiMaps.fAttack = midiMaps[13]
      this.midiMaps.fRelease = midiMaps[14]
      this.midiMaps.fEnvelope = midiMaps[15]
      this.midiMaps.polyphonyCh = midiMaps[16]
      this.midiMaps.mode = midiMaps[17]
      this.midiMaps.noise = midiMaps[18]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.waveform)
      a.push(this.midiMaps.panning)
      a.push(this.midiMaps.attack)
      a.push(this.midiMaps.release)
      a.push(this.midiMaps.sustain)
      a.push(this.midiMaps.exponentialEnvelope)
      a.push(this.midiMaps.dutyCycle)
      a.push(this.midiMaps.freq2)
      a.push(this.midiMaps.filter)
      a.push(this.midiMaps.fFreqHz)
      a.push(this.midiMaps.fResonance)
      a.push(this.midiMaps.fExponentialFreq)
      a.push(this.midiMaps.fAttack)
      a.push(this.midiMaps.fRelease)
      a.push(this.midiMaps.fEnvelope)
      a.push(this.midiMaps.polyphonyCh)
      a.push(this.midiMaps.mode)
      a.push(this.midiMaps.noise)
      return a
    }
    rawOptionBytes(): Uint8Array {
      const bytes = new Uint8Array(13)
      const { optionValues: ov } = this
      bytes[0] = Number(ov.volumeEnvelopeScalingPerKey)
      bytes[1] = Number(ov.filterEnvelopeScalingPerKey)
      bytes[2] = Number(ov.volumeScalingPerKey)
      bytes[3] = Number(ov.filterFreqScalingPerKey)
      bytes[4] = Number(ov.velocityDependentFilterFrequency)
      bytes[5] = Number(ov.frequencyDiv_2)
      bytes[6] = Number(!ov.smoothFrequencyChange)
      bytes[7] = Number(ov.filterFreqScalingPerKeyReverse)
      bytes[8] = Number(ov.retainPhase)
      bytes[9] = Number(ov.randomPhase)
      bytes[10] = Number(ov.filterFreqEqNoteFreq)
      bytes[11] = Number(ov.velocityDependentFilterResonance)
      bytes[12] = Number(ov.trueZeroAttackRelease)
      return bytes
    }
    setOptions(dataChunks: ModuleDataChunks) {
      let chdt
      for (const dataChunk of dataChunks) {
        if (dataChunk.chnm == this.optionsChnm) {
          chdt = dataChunk.chdt
          break
        }
      }
      if (chdt) {
        this.optionValues.volumeEnvelopeScalingPerKey = Boolean(chdt[0])
        this.optionValues.filterEnvelopeScalingPerKey = Boolean(chdt[1])
        this.optionValues.volumeScalingPerKey = Boolean(chdt[2])
        this.optionValues.filterFreqScalingPerKey = Boolean(chdt[3])
        this.optionValues.velocityDependentFilterFrequency = Boolean(chdt[4])
        this.optionValues.frequencyDiv_2 = Boolean(chdt[5])
        this.optionValues.smoothFrequencyChange = !Boolean(chdt[6])
        this.optionValues.filterFreqScalingPerKeyReverse = Boolean(chdt[7])
        this.optionValues.retainPhase = Boolean(chdt[8])
        this.optionValues.randomPhase = Boolean(chdt[9])
        this.optionValues.filterFreqEqNoteFreq = Boolean(chdt[10])
        this.optionValues.velocityDependentFilterResonance = Boolean(chdt[11])
        this.optionValues.trueZeroAttackRelease = Boolean(chdt[12])
      }
    }
  }
}