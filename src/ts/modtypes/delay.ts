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
import { DelayBehavior } from "./delayBehavior"
export namespace Delay {
  export const enum Channels {
    // noinspection JSUnusedGlobalSymbols
    Stereo = 0,
    Mono = 1,
  }
  export const enum DelayUnits {
    // noinspection JSUnusedGlobalSymbols
    Sec_16384 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6,
  }
  interface DelayControllerValues extends ControllerValues {
    dry: number
    wet: number
    delayL: number
    delayR: number
    volumeL: number
    volumeR: number
    channels: Channels
    inverse: boolean
    delayUnits: DelayUnits
  }
  class DelayControllers implements Controllers {
    constructor(readonly controllerValues: DelayControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get dry(): number {
      return this.controllerValues.dry
    }
    // noinspection JSUnusedGlobalSymbols
    set dry(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.dry = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get wet(): number {
      return this.controllerValues.wet
    }
    // noinspection JSUnusedGlobalSymbols
    set wet(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.wet = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get delayL(): number {
      return this.controllerValues.delayL
    }
    // noinspection JSUnusedGlobalSymbols
    set delayL(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.delayL = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get delayR(): number {
      return this.controllerValues.delayR
    }
    // noinspection JSUnusedGlobalSymbols
    set delayR(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.delayR = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get volumeL(): number {
      return this.controllerValues.volumeL
    }
    // noinspection JSUnusedGlobalSymbols
    set volumeL(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.volumeL = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get volumeR(): number {
      return this.controllerValues.volumeR
    }
    // noinspection JSUnusedGlobalSymbols
    set volumeR(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.volumeR = newValue
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
    get inverse(): boolean {
      return this.controllerValues.inverse
    }
    // noinspection JSUnusedGlobalSymbols
    set inverse(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.inverse = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get delayUnits(): DelayUnits {
      return this.controllerValues.delayUnits
    }
    // noinspection JSUnusedGlobalSymbols
    set delayUnits(newValue: DelayUnits) {
      const { controllerValues } = this
      controllerValues.delayUnits = newValue
    }
  }
  interface DelayControllerMidiMaps extends ControllerMidiMaps {
    dry: ControllerMidiMap
    wet: ControllerMidiMap
    delayL: ControllerMidiMap
    delayR: ControllerMidiMap
    volumeL: ControllerMidiMap
    volumeR: ControllerMidiMap
    channels: ControllerMidiMap
    inverse: ControllerMidiMap
    delayUnits: ControllerMidiMap
  }
  interface DelayOptionValues extends OptionValues {}
  class DelayOptions implements Options {
    constructor(readonly optionValues: DelayOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    readonly name = "Delay"
    readonly typeName = "Delay"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.dry = val
      },
      (val: number) => {
        this.controllerValues.wet = val
      },
      (val: number) => {
        this.controllerValues.delayL = val
      },
      (val: number) => {
        this.controllerValues.delayR = val
      },
      (val: number) => {
        this.controllerValues.volumeL = val
      },
      (val: number) => {
        this.controllerValues.volumeR = val
      },
      (val: number) => {
        this.controllerValues.channels = val
      },
      (val: number) => {
        this.controllerValues.inverse = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.delayUnits = val
      },
    ]
    readonly controllerValues: DelayControllerValues = {
      dry: 256,
      wet: 256,
      delayL: 128,
      delayR: 160,
      volumeL: 256,
      volumeR: 256,
      channels: Channels.Stereo,
      inverse: false,
      delayUnits: DelayUnits.Sec_16384,
    }
    readonly controllers: DelayControllers = new DelayControllers(this.controllerValues)
    readonly c = this.controllers
    readonly midiMaps: DelayControllerMidiMaps = {
      dry: new ControllerMidiMap(),
      wet: new ControllerMidiMap(),
      delayL: new ControllerMidiMap(),
      delayR: new ControllerMidiMap(),
      volumeL: new ControllerMidiMap(),
      volumeR: new ControllerMidiMap(),
      channels: new ControllerMidiMap(),
      inverse: new ControllerMidiMap(),
      delayUnits: new ControllerMidiMap(),
    }
    readonly optionValues: DelayOptionValues = {}
    readonly options: DelayOptions = new DelayOptions(this.optionValues)
    readonly o = this.options
    behavior?: DelayBehavior
    constructor() {
      super()
      this.behavior = new DelayBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.dry
      yield cv.wet
      yield cv.delayL
      yield cv.delayR
      yield cv.volumeL
      yield cv.volumeR
      yield cv.channels
      yield Number(cv.inverse)
      yield cv.delayUnits
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.dry = midiMaps[0]
      this.midiMaps.wet = midiMaps[1]
      this.midiMaps.delayL = midiMaps[2]
      this.midiMaps.delayR = midiMaps[3]
      this.midiMaps.volumeL = midiMaps[4]
      this.midiMaps.volumeR = midiMaps[5]
      this.midiMaps.channels = midiMaps[6]
      this.midiMaps.inverse = midiMaps[7]
      this.midiMaps.delayUnits = midiMaps[8]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.dry)
      a.push(this.midiMaps.wet)
      a.push(this.midiMaps.delayL)
      a.push(this.midiMaps.delayR)
      a.push(this.midiMaps.volumeL)
      a.push(this.midiMaps.volumeR)
      a.push(this.midiMaps.channels)
      a.push(this.midiMaps.inverse)
      a.push(this.midiMaps.delayUnits)
      return a
    }
  }
}
