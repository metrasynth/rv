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
import { SamplerBehavior } from "./samplerBehavior"
import { SamplerControllers } from "./samplerControllers"
import { SamplerControllerValues } from "./samplerControllerValues"
import { SampleInterpolation as _SampleInterpolation } from "./samplerEnums"
import { EnvelopeInterpolation as _EnvelopeInterpolation } from "./samplerEnums"
import { VibratoType as _VibratoType } from "./samplerEnums"
import { LoopType as _LoopType } from "./samplerEnums"
import { Format as _Format } from "./samplerEnums"
import { Channels as _Channels } from "./samplerEnums"
export namespace Sampler {
  export const SampleInterpolation = _SampleInterpolation
  export const EnvelopeInterpolation = _EnvelopeInterpolation
  export const VibratoType = _VibratoType
  export const LoopType = _LoopType
  export const Format = _Format
  export const Channels = _Channels
  interface SamplerControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    panning: ControllerMidiMap
    sampleInterpolation: ControllerMidiMap
    envelopeInterpolation: ControllerMidiMap
    polyphonyCh: ControllerMidiMap
    recThreshold: ControllerMidiMap
    vibratoType: ControllerMidiMap
    vibratoAttack: ControllerMidiMap
    vibratoDepth: ControllerMidiMap
    vibratoRate: ControllerMidiMap
    volumeFadeout: ControllerMidiMap
  }
  interface SamplerOptionValues extends OptionValues {
    recordOnPlay: boolean
    recordInMono: boolean
    recordWithReducedSampleRate: boolean
    recordIn_16Bit: boolean
    stopRecordingOnProjectStop: boolean
    ignoreVelocityForVolume: boolean
  }
  class SamplerOptions implements Options {
    constructor(readonly optionValues: SamplerOptionValues) {}
    // noinspection JSUnusedGlobalSymbols
    get recordOnPlay(): boolean {
      return this.optionValues.recordOnPlay
    }
    // noinspection JSUnusedGlobalSymbols
    set recordOnPlay(newValue: boolean) {
      this.optionValues.recordOnPlay = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get recordInMono(): boolean {
      return this.optionValues.recordInMono
    }
    // noinspection JSUnusedGlobalSymbols
    set recordInMono(newValue: boolean) {
      this.optionValues.recordInMono = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get recordWithReducedSampleRate(): boolean {
      return this.optionValues.recordWithReducedSampleRate
    }
    // noinspection JSUnusedGlobalSymbols
    set recordWithReducedSampleRate(newValue: boolean) {
      this.optionValues.recordWithReducedSampleRate = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get recordIn_16Bit(): boolean {
      return this.optionValues.recordIn_16Bit
    }
    // noinspection JSUnusedGlobalSymbols
    set recordIn_16Bit(newValue: boolean) {
      this.optionValues.recordIn_16Bit = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get stopRecordingOnProjectStop(): boolean {
      return this.optionValues.stopRecordingOnProjectStop
    }
    // noinspection JSUnusedGlobalSymbols
    set stopRecordingOnProjectStop(newValue: boolean) {
      this.optionValues.stopRecordingOnProjectStop = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get ignoreVelocityForVolume(): boolean {
      return this.optionValues.ignoreVelocityForVolume
    }
    // noinspection JSUnusedGlobalSymbols
    set ignoreVelocityForVolume(newValue: boolean) {
      this.optionValues.ignoreVelocityForVolume = newValue
    }
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Sampler"
    flags = 33881
    readonly typeName = "Sampler"
    readonly optionsChnm = 257
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.panning = val
      },
      (val: number) => {
        this.controllerValues.sampleInterpolation = val
      },
      (val: number) => {
        this.controllerValues.envelopeInterpolation = val
      },
      (val: number) => {
        this.controllerValues.polyphonyCh = val
      },
      (val: number) => {
        this.controllerValues.recThreshold = val
      },
      (val: number) => {
        this.controllerValues.vibratoType = val
      },
      (val: number) => {
        this.controllerValues.vibratoAttack = val
      },
      (val: number) => {
        this.controllerValues.vibratoDepth = val
      },
      (val: number) => {
        this.controllerValues.vibratoRate = val
      },
      (val: number) => {
        this.controllerValues.volumeFadeout = val
      },
    ]
    readonly controllerValues: SamplerControllerValues = {
      volume: 256,
      panning: 0,
      sampleInterpolation: SampleInterpolation.Spline,
      envelopeInterpolation: EnvelopeInterpolation.Linear,
      polyphonyCh: 8,
      recThreshold: 4,
      vibratoType: VibratoType.Sin,
      vibratoAttack: 0,
      vibratoDepth: 0,
      vibratoRate: 0,
      volumeFadeout: 0,
    }
    readonly controllers: SamplerControllers = new SamplerControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: SamplerControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      panning: new ControllerMidiMap(),
      sampleInterpolation: new ControllerMidiMap(),
      envelopeInterpolation: new ControllerMidiMap(),
      polyphonyCh: new ControllerMidiMap(),
      recThreshold: new ControllerMidiMap(),
      vibratoType: new ControllerMidiMap(),
      vibratoAttack: new ControllerMidiMap(),
      vibratoDepth: new ControllerMidiMap(),
      vibratoRate: new ControllerMidiMap(),
      volumeFadeout: new ControllerMidiMap(),
    }
    readonly optionValues: SamplerOptionValues = {
      recordOnPlay: false,
      recordInMono: false,
      recordWithReducedSampleRate: false,
      recordIn_16Bit: false,
      stopRecordingOnProjectStop: false,
      ignoreVelocityForVolume: false,
    }
    readonly options: SamplerOptions = new SamplerOptions(this.optionValues)
    readonly o = this.options
    behavior?: SamplerBehavior
    constructor() {
      super()
      this.behavior = new SamplerBehavior(this)
    }
    attachTo(project: Project): AttachedModule {
      return super.attachTo(project) as AttachedModule
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.panning
      yield cv.sampleInterpolation
      yield cv.envelopeInterpolation
      yield cv.polyphonyCh
      yield cv.recThreshold
      yield cv.vibratoType
      yield cv.vibratoAttack
      yield cv.vibratoDepth
      yield cv.vibratoRate
      yield cv.volumeFadeout
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.panning = midiMaps[1]
      this.midiMaps.sampleInterpolation = midiMaps[2]
      this.midiMaps.envelopeInterpolation = midiMaps[3]
      this.midiMaps.polyphonyCh = midiMaps[4]
      this.midiMaps.recThreshold = midiMaps[5]
      this.midiMaps.vibratoType = midiMaps[6]
      this.midiMaps.vibratoAttack = midiMaps[7]
      this.midiMaps.vibratoDepth = midiMaps[8]
      this.midiMaps.vibratoRate = midiMaps[9]
      this.midiMaps.volumeFadeout = midiMaps[10]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.panning)
      a.push(this.midiMaps.sampleInterpolation)
      a.push(this.midiMaps.envelopeInterpolation)
      a.push(this.midiMaps.polyphonyCh)
      a.push(this.midiMaps.recThreshold)
      a.push(this.midiMaps.vibratoType)
      a.push(this.midiMaps.vibratoAttack)
      a.push(this.midiMaps.vibratoDepth)
      a.push(this.midiMaps.vibratoRate)
      a.push(this.midiMaps.volumeFadeout)
      return a
    }
    rawOptionBytes(): Uint8Array {
      const bytes = new Uint8Array(6)
      const { optionValues: ov } = this
      bytes[0] = Number(ov.recordOnPlay)
      bytes[1] = Number(ov.recordInMono)
      bytes[2] = Number(ov.recordWithReducedSampleRate)
      bytes[3] = Number(ov.recordIn_16Bit)
      bytes[4] = Number(ov.stopRecordingOnProjectStop)
      bytes[5] = Number(ov.ignoreVelocityForVolume)
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
        this.optionValues.recordOnPlay = Boolean(chdt[0])
        this.optionValues.recordInMono = Boolean(chdt[1])
        this.optionValues.recordWithReducedSampleRate = Boolean(chdt[2])
        this.optionValues.recordIn_16Bit = Boolean(chdt[3])
        this.optionValues.stopRecordingOnProjectStop = Boolean(chdt[4])
        this.optionValues.ignoreVelocityForVolume = Boolean(chdt[5])
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
