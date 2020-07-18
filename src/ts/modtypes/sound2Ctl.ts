/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk"
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { ModuleBase } from "./moduleBase"
import {
  ControllerValues,
  Controllers,
  ModuleType,
  OptionValues,
  Options,
} from "./moduleType"
import { Sound2CtlBehavior } from "./sound2CtlBehavior"
export namespace Sound2Ctl {
  export const enum Channels {
    // noinspection JSUnusedGlobalSymbols
    Mono = 0,
    Stereo = 1,
  }
  export const enum Mode {
    // noinspection JSUnusedGlobalSymbols
    Lq = 0,
    Hq = 1,
  }
  interface Sound2CtlControllerValues extends ControllerValues {
    sampleRateHz: number
    channels: Channels
    absolute: boolean
    gain: number
    smooth: number
    mode: Mode
    outMin: number
    outMax: number
    outController: number
  }
  class Sound2CtlControllers implements Controllers {
    constructor(readonly controllerValues: Sound2CtlControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get sampleRateHz(): number {
      return this.controllerValues.sampleRateHz
    }
    // noinspection JSUnusedGlobalSymbols
    set sampleRateHz(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 1), 32768)
      controllerValues.sampleRateHz = newValue
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
    // noinspection JSUnusedGlobalSymbols
    get absolute(): boolean {
      return this.controllerValues.absolute
    }
    // noinspection JSUnusedGlobalSymbols
    set absolute(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.absolute = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get gain(): number {
      return this.controllerValues.gain
    }
    // noinspection JSUnusedGlobalSymbols
    set gain(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 1024)
      controllerValues.gain = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get smooth(): number {
      return this.controllerValues.smooth
    }
    // noinspection JSUnusedGlobalSymbols
    set smooth(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.smooth = newValue
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
    get outMin(): number {
      return this.controllerValues.outMin
    }
    // noinspection JSUnusedGlobalSymbols
    set outMin(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 32768)
      controllerValues.outMin = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get outMax(): number {
      return this.controllerValues.outMax
    }
    // noinspection JSUnusedGlobalSymbols
    set outMax(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 32768)
      controllerValues.outMax = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get outController(): number {
      return this.controllerValues.outController
    }
    // noinspection JSUnusedGlobalSymbols
    set outController(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 32)
      controllerValues.outController = newValue
    }
  }
  interface Sound2CtlControllerMidiMaps extends ControllerMidiMaps {
    sampleRateHz: ControllerMidiMap
    channels: ControllerMidiMap
    absolute: ControllerMidiMap
    gain: ControllerMidiMap
    smooth: ControllerMidiMap
    mode: ControllerMidiMap
    outMin: ControllerMidiMap
    outMax: ControllerMidiMap
    outController: ControllerMidiMap
  }
  interface Sound2CtlOptionValues extends OptionValues {
    recordValues: boolean
  }
  class Sound2CtlOptions implements Options {
    constructor(readonly optionValues: Sound2CtlOptionValues) {}
    // noinspection JSUnusedGlobalSymbols
    get recordValues(): boolean {
      return this.optionValues.recordValues
    }
    // noinspection JSUnusedGlobalSymbols
    set recordValues(newValue: boolean) {
      this.optionValues.recordValues = newValue
    }
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Sound2Ctl"
    flags = 393297
    readonly typeName = "Sound2Ctl"
    readonly optionsChnm = 0
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.sampleRateHz = val
      },
      (val: number) => {
        this.controllerValues.channels = val
      },
      (val: number) => {
        this.controllerValues.absolute = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.gain = val
      },
      (val: number) => {
        this.controllerValues.smooth = val
      },
      (val: number) => {
        this.controllerValues.mode = val
      },
      (val: number) => {
        this.controllerValues.outMin = val
      },
      (val: number) => {
        this.controllerValues.outMax = val
      },
      (val: number) => {
        this.controllerValues.outController = val
      },
    ]
    readonly controllerValues: Sound2CtlControllerValues = {
      sampleRateHz: 50,
      channels: Channels.Mono,
      absolute: true,
      gain: 256,
      smooth: 128,
      mode: Mode.Hq,
      outMin: 0,
      outMax: 32768,
      outController: 0,
    }
    readonly controllers: Sound2CtlControllers = new Sound2CtlControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: Sound2CtlControllerMidiMaps = {
      sampleRateHz: new ControllerMidiMap(),
      channels: new ControllerMidiMap(),
      absolute: new ControllerMidiMap(),
      gain: new ControllerMidiMap(),
      smooth: new ControllerMidiMap(),
      mode: new ControllerMidiMap(),
      outMin: new ControllerMidiMap(),
      outMax: new ControllerMidiMap(),
      outController: new ControllerMidiMap(),
    }
    readonly optionValues: Sound2CtlOptionValues = {
      recordValues: false,
    }
    readonly options: Sound2CtlOptions = new Sound2CtlOptions(this.optionValues)
    readonly o = this.options
    behavior?: Sound2CtlBehavior
    constructor() {
      super()
      this.behavior = new Sound2CtlBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.sampleRateHz
      yield cv.channels
      yield Number(cv.absolute)
      yield cv.gain
      yield cv.smooth
      yield cv.mode
      yield cv.outMin
      yield cv.outMax
      yield cv.outController
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.sampleRateHz = midiMaps[0]
      this.midiMaps.channels = midiMaps[1]
      this.midiMaps.absolute = midiMaps[2]
      this.midiMaps.gain = midiMaps[3]
      this.midiMaps.smooth = midiMaps[4]
      this.midiMaps.mode = midiMaps[5]
      this.midiMaps.outMin = midiMaps[6]
      this.midiMaps.outMax = midiMaps[7]
      this.midiMaps.outController = midiMaps[8]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.sampleRateHz)
      a.push(this.midiMaps.channels)
      a.push(this.midiMaps.absolute)
      a.push(this.midiMaps.gain)
      a.push(this.midiMaps.smooth)
      a.push(this.midiMaps.mode)
      a.push(this.midiMaps.outMin)
      a.push(this.midiMaps.outMax)
      a.push(this.midiMaps.outController)
      return a
    }
    rawOptionBytes(): Uint8Array {
      const bytes = new Uint8Array(1)
      const { optionValues: ov } = this
      bytes[0] = Number(ov.recordValues)
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
        this.optionValues.recordValues = Boolean(chdt[0])
      }
    }
  }
}
