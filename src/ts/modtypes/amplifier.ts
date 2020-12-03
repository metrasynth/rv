/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { Project } from "../project"
import { ModuleBase } from "./moduleBase"
import { ModuleType, OptionValues, Options } from "./moduleType"
import { AmplifierBehavior } from "./amplifierBehavior"
import { AmplifierControllers } from "./amplifierControllers"
import { AmplifierControllerValues } from "./amplifierControllerValues"
export namespace Amplifier {
  export enum CtlNum {
    Volume = 1,
    Balance = 2,
    DcOffset = 3,
    Inverse = 4,
    StereoWidth = 5,
    Absolute = 6,
    FineVolume = 7,
    Gain = 8,
  }
  interface AmplifierControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    balance: ControllerMidiMap
    dcOffset: ControllerMidiMap
    inverse: ControllerMidiMap
    stereoWidth: ControllerMidiMap
    absolute: ControllerMidiMap
    fineVolume: ControllerMidiMap
    gain: ControllerMidiMap
  }
  interface AmplifierOptionValues extends OptionValues {}
  class AmplifierOptions implements Options {
    constructor(readonly optionValues: AmplifierOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Amplifier"
    flags = 81
    readonly typeName = "Amplifier"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.balance = val
      },
      (val: number) => {
        this.controllerValues.dcOffset = val
      },
      (val: number) => {
        this.controllerValues.inverse = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.stereoWidth = val
      },
      (val: number) => {
        this.controllerValues.absolute = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.fineVolume = val
      },
      (val: number) => {
        this.controllerValues.gain = val
      },
    ]
    readonly controllerValues: AmplifierControllerValues = {
      volume: 256,
      balance: 0,
      dcOffset: 0,
      inverse: false,
      stereoWidth: 128,
      absolute: false,
      fineVolume: 32768,
      gain: 1,
    }
    readonly controllers: AmplifierControllers = new AmplifierControllers(
      this,
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: AmplifierControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      balance: new ControllerMidiMap(),
      dcOffset: new ControllerMidiMap(),
      inverse: new ControllerMidiMap(),
      stereoWidth: new ControllerMidiMap(),
      absolute: new ControllerMidiMap(),
      fineVolume: new ControllerMidiMap(),
      gain: new ControllerMidiMap(),
    }
    readonly optionValues: AmplifierOptionValues = {}
    readonly options: AmplifierOptions = new AmplifierOptions(this.optionValues)
    readonly o = this.options
    behavior?: AmplifierBehavior
    constructor() {
      super()
      this.behavior = new AmplifierBehavior(this)
    }
    attachTo(project: Project): AttachedModule {
      return super.attachTo(project) as AttachedModule
    }
    setRawControllerValue(ctlNum: number, value: number) {
      const { controllerValues: cv } = this
      switch (ctlNum) {
        case 1:
          cv.volume = value
          break
        case 2:
          cv.balance = value
          break
        case 3:
          cv.dcOffset = value
          break
        case 4:
          cv.inverse = Boolean(value)
          break
        case 5:
          cv.stereoWidth = value
          break
        case 6:
          cv.absolute = Boolean(value)
          break
        case 7:
          cv.fineVolume = value
          break
        case 8:
          cv.gain = value
          break
      }
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.balance
      yield cv.dcOffset
      yield Number(cv.inverse)
      yield cv.stereoWidth
      yield Number(cv.absolute)
      yield cv.fineVolume
      yield cv.gain
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.balance = midiMaps[1] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.dcOffset = midiMaps[2] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.inverse = midiMaps[3] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.stereoWidth = midiMaps[4] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.absolute = midiMaps[5] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.fineVolume = midiMaps[6] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.gain = midiMaps[7] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.balance)
      a.push(this.midiMaps.dcOffset)
      a.push(this.midiMaps.inverse)
      a.push(this.midiMaps.stereoWidth)
      a.push(this.midiMaps.absolute)
      a.push(this.midiMaps.fineVolume)
      a.push(this.midiMaps.gain)
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
