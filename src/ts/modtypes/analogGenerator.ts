/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk"
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { Project } from "../project"
import { ModuleBase } from "./moduleBase"
import { ModuleType, OptionValues, Options } from "./moduleType"
import { AnalogGeneratorBehavior } from "./analogGeneratorBehavior"
import { AnalogGeneratorControllers } from "./analogGeneratorControllers"
import { AnalogGeneratorControllerValues } from "./analogGeneratorControllerValues"
export namespace AnalogGenerator {
  // Intentionally duplicated enums - see also analogGeneratorEnums.ts
  // (TypeScript does not allow exporting imported enums from inside a namespace)
  export enum Mode {
    // noinspection JSUnusedGlobalSymbols
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3,
  }
  export enum Waveform {
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
  export enum Filter {
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
  export enum FilterEnvelope {
    // noinspection JSUnusedGlobalSymbols
    Off = 0,
    SustainOff = 1,
    SustainOn = 2,
  }
  export enum CtlNum {
    Volume = 1,
    Waveform = 2,
    Panning = 3,
    Attack = 4,
    Release = 5,
    Sustain = 6,
    ExponentialEnvelope = 7,
    DutyCycle = 8,
    Freq2 = 9,
    Filter = 10,
    FFreqHz = 11,
    FResonance = 12,
    FExponentialFreq = 13,
    FAttack = 14,
    FRelease = 15,
    FEnvelope = 16,
    PolyphonyCh = 17,
    Mode = 18,
    Noise = 19,
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
      this,
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
    attachTo(project: Project): AttachedModule {
      return super.attachTo(project) as AttachedModule
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
  export class AttachedModule extends Module {
    get index(): number {
      if (this._index === undefined) {
        throw new Error("Attached module has empty index")
      }
      return this._index
    }
    set index(_: number) {
      throw new Error("Module index can only be assigned once")
    }
  }
}
