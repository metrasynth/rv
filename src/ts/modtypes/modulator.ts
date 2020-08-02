/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { Project } from "../project"
import { ModuleBase } from "./moduleBase"
import { ModuleType, OptionValues, Options } from "./moduleType"
import { ModulatorBehavior } from "./modulatorBehavior"
import { ModulatorControllers } from "./modulatorControllers"
import { ModulatorControllerValues } from "./modulatorControllerValues"
import { ModulationType as _ModulationType } from "./modulatorEnums"
import { Channels as _Channels } from "./modulatorEnums"
export namespace Modulator {
  export const ModulationType = _ModulationType
  export const Channels = _Channels
  interface ModulatorControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    modulationType: ControllerMidiMap
    channels: ControllerMidiMap
  }
  interface ModulatorOptionValues extends OptionValues {}
  class ModulatorOptions implements Options {
    constructor(readonly optionValues: ModulatorOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Modulator"
    flags = 8273
    readonly typeName = "Modulator"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.modulationType = val
      },
      (val: number) => {
        this.controllerValues.channels = val
      },
    ]
    readonly controllerValues: ModulatorControllerValues = {
      volume: 256,
      modulationType: ModulationType.Amplitude,
      channels: Channels.Stereo,
    }
    readonly controllers: ModulatorControllers = new ModulatorControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: ModulatorControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      modulationType: new ControllerMidiMap(),
      channels: new ControllerMidiMap(),
    }
    readonly optionValues: ModulatorOptionValues = {}
    readonly options: ModulatorOptions = new ModulatorOptions(this.optionValues)
    readonly o = this.options
    behavior?: ModulatorBehavior
    constructor() {
      super()
      this.behavior = new ModulatorBehavior(this)
    }
    attachTo(project: Project): AttachedModule {
      return super.attachTo(project) as AttachedModule
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.modulationType
      yield cv.channels
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.modulationType = midiMaps[1]
      this.midiMaps.channels = midiMaps[2]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.modulationType)
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
