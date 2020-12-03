/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { Project } from "../project"
import { ModuleBase } from "./moduleBase"
import { ModuleType, OptionValues, Options } from "./moduleType"
import { EqBehavior } from "./eqBehavior"
import { EqControllers } from "./eqControllers"
import { EqControllerValues } from "./eqControllerValues"
export namespace Eq {
  // Intentionally duplicated enums - see also eqEnums.ts
  // (TypeScript does not allow exporting imported enums from inside a namespace)
  export enum Channels {
    // noinspection JSUnusedGlobalSymbols
    Stereo = 0,
    Mono = 1,
  }
  export enum CtlNum {
    Low = 1,
    Middle = 2,
    High = 3,
    Channels = 4,
  }
  interface EqControllerMidiMaps extends ControllerMidiMaps {
    low: ControllerMidiMap
    middle: ControllerMidiMap
    high: ControllerMidiMap
    channels: ControllerMidiMap
  }
  interface EqOptionValues extends OptionValues {}
  class EqOptions implements Options {
    constructor(readonly optionValues: EqOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "EQ"
    flags = 81
    readonly typeName = "EQ"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.low = val
      },
      (val: number) => {
        this.controllerValues.middle = val
      },
      (val: number) => {
        this.controllerValues.high = val
      },
      (val: number) => {
        this.controllerValues.channels = val
      },
    ]
    readonly controllerValues: EqControllerValues = {
      low: 256,
      middle: 256,
      high: 256,
      channels: Channels.Stereo,
    }
    readonly controllers: EqControllers = new EqControllers(this, this.controllerValues)
    readonly c = this.controllers
    readonly midiMaps: EqControllerMidiMaps = {
      low: new ControllerMidiMap(),
      middle: new ControllerMidiMap(),
      high: new ControllerMidiMap(),
      channels: new ControllerMidiMap(),
    }
    readonly optionValues: EqOptionValues = {}
    readonly options: EqOptions = new EqOptions(this.optionValues)
    readonly o = this.options
    behavior?: EqBehavior
    constructor() {
      super()
      this.behavior = new EqBehavior(this)
    }
    attachTo(project: Project): AttachedModule {
      return super.attachTo(project) as AttachedModule
    }
    setRawControllerValue(ctlNum: number, value: number) {
      const { controllerValues: cv } = this
      switch (ctlNum) {
        case 1:
          cv.low = value
          break
        case 2:
          cv.middle = value
          break
        case 3:
          cv.high = value
          break
        case 4:
          cv.channels = value
          break
      }
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.low
      yield cv.middle
      yield cv.high
      yield cv.channels
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.low = midiMaps[0] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.middle = midiMaps[1] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.high = midiMaps[2] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.channels = midiMaps[3] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.low)
      a.push(this.midiMaps.middle)
      a.push(this.midiMaps.high)
      a.push(this.midiMaps.channels)
      return a
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
