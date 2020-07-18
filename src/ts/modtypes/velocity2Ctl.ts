/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
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
import { Velocity2CtlBehavior } from "./velocity2CtlBehavior"
export namespace Velocity2Ctl {
  export const enum NoteOffAction {
    // noinspection JSUnusedGlobalSymbols
    DoNothing = 0,
    VelDown = 1,
    VelUp = 2,
  }
  interface Velocity2CtlControllerValues extends ControllerValues {
    noteOffAction: NoteOffAction
    outMin: number
    outMax: number
    outOffset: number
    outController: number
  }
  class Velocity2CtlControllers implements Controllers {
    constructor(readonly controllerValues: Velocity2CtlControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get noteOffAction(): NoteOffAction {
      return this.controllerValues.noteOffAction
    }
    // noinspection JSUnusedGlobalSymbols
    set noteOffAction(newValue: NoteOffAction) {
      const { controllerValues } = this
      controllerValues.noteOffAction = newValue
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
    get outOffset(): number {
      return this.controllerValues.outOffset + -16384
    }
    // noinspection JSUnusedGlobalSymbols
    set outOffset(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -16384), 16384)
      controllerValues.outOffset = newValue - -16384
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
  interface Velocity2CtlControllerMidiMaps extends ControllerMidiMaps {
    noteOffAction: ControllerMidiMap
    outMin: ControllerMidiMap
    outMax: ControllerMidiMap
    outOffset: ControllerMidiMap
    outController: ControllerMidiMap
  }
  interface Velocity2CtlOptionValues extends OptionValues {}
  class Velocity2CtlOptions implements Options {
    constructor(readonly optionValues: Velocity2CtlOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Velocity2Ctl"
    flags = 131145
    readonly typeName = "Velocity2Ctl"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.noteOffAction = val
      },
      (val: number) => {
        this.controllerValues.outMin = val
      },
      (val: number) => {
        this.controllerValues.outMax = val
      },
      (val: number) => {
        this.controllerValues.outOffset = val
      },
      (val: number) => {
        this.controllerValues.outController = val
      },
    ]
    readonly controllerValues: Velocity2CtlControllerValues = {
      noteOffAction: NoteOffAction.DoNothing,
      outMin: 0,
      outMax: 32768,
      outOffset: 0,
      outController: 0,
    }
    readonly controllers: Velocity2CtlControllers = new Velocity2CtlControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: Velocity2CtlControllerMidiMaps = {
      noteOffAction: new ControllerMidiMap(),
      outMin: new ControllerMidiMap(),
      outMax: new ControllerMidiMap(),
      outOffset: new ControllerMidiMap(),
      outController: new ControllerMidiMap(),
    }
    readonly optionValues: Velocity2CtlOptionValues = {}
    readonly options: Velocity2CtlOptions = new Velocity2CtlOptions(this.optionValues)
    readonly o = this.options
    behavior?: Velocity2CtlBehavior
    constructor() {
      super()
      this.behavior = new Velocity2CtlBehavior(this)
    }
    attachTo(project: Project): Module {
      return super.attachTo(project) as Module
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.noteOffAction
      yield cv.outMin
      yield cv.outMax
      yield cv.outOffset
      yield cv.outController
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.noteOffAction = midiMaps[0]
      this.midiMaps.outMin = midiMaps[1]
      this.midiMaps.outMax = midiMaps[2]
      this.midiMaps.outOffset = midiMaps[3]
      this.midiMaps.outController = midiMaps[4]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.noteOffAction)
      a.push(this.midiMaps.outMin)
      a.push(this.midiMaps.outMax)
      a.push(this.midiMaps.outOffset)
      a.push(this.midiMaps.outController)
      return a
    }
  }
}