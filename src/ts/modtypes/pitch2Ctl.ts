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
import { Pitch2CtlBehavior } from "./pitch2CtlBehavior"
export namespace Pitch2Ctl {
  export const enum Mode {
    // noinspection JSUnusedGlobalSymbols
    FrequencyHz = 0,
    Pitch = 1,
  }
  export const enum NoteOffAction {
    // noinspection JSUnusedGlobalSymbols
    DoNothing = 0,
    PitchDown = 1,
    PitchUp = 2,
  }
  interface Pitch2CtlControllerValues extends ControllerValues {
    mode: Mode
    noteOffAction: NoteOffAction
    firstNote: number
    numberOfSemitones: number
    outMin: number
    outMax: number
    outController: number
  }
  class Pitch2CtlControllers implements Controllers {
    constructor(readonly controllerValues: Pitch2CtlControllerValues) {}
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
    get noteOffAction(): NoteOffAction {
      return this.controllerValues.noteOffAction
    }
    // noinspection JSUnusedGlobalSymbols
    set noteOffAction(newValue: NoteOffAction) {
      const { controllerValues } = this
      controllerValues.noteOffAction = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get firstNote(): number {
      return this.controllerValues.firstNote
    }
    // noinspection JSUnusedGlobalSymbols
    set firstNote(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.firstNote = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get numberOfSemitones(): number {
      return this.controllerValues.numberOfSemitones
    }
    // noinspection JSUnusedGlobalSymbols
    set numberOfSemitones(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.numberOfSemitones = newValue
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
  interface Pitch2CtlControllerMidiMaps extends ControllerMidiMaps {
    mode: ControllerMidiMap
    noteOffAction: ControllerMidiMap
    firstNote: ControllerMidiMap
    numberOfSemitones: ControllerMidiMap
    outMin: ControllerMidiMap
    outMax: ControllerMidiMap
    outController: ControllerMidiMap
  }
  interface Pitch2CtlOptionValues extends OptionValues {}
  class Pitch2CtlOptions implements Options {
    constructor(readonly optionValues: Pitch2CtlOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    readonly name = "Pitch2Ctl"
    readonly typeName = "Pitch2Ctl"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.mode = val
      },
      (val: number) => {
        this.controllerValues.noteOffAction = val
      },
      (val: number) => {
        this.controllerValues.firstNote = val
      },
      (val: number) => {
        this.controllerValues.numberOfSemitones = val
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
    readonly controllerValues: Pitch2CtlControllerValues = {
      mode: Mode.FrequencyHz,
      noteOffAction: NoteOffAction.DoNothing,
      firstNote: 0,
      numberOfSemitones: 120,
      outMin: 0,
      outMax: 32768,
      outController: 0,
    }
    readonly controllers: Pitch2CtlControllers = new Pitch2CtlControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: Pitch2CtlControllerMidiMaps = {
      mode: new ControllerMidiMap(),
      noteOffAction: new ControllerMidiMap(),
      firstNote: new ControllerMidiMap(),
      numberOfSemitones: new ControllerMidiMap(),
      outMin: new ControllerMidiMap(),
      outMax: new ControllerMidiMap(),
      outController: new ControllerMidiMap(),
    }
    readonly optionValues: Pitch2CtlOptionValues = {}
    readonly options: Pitch2CtlOptions = new Pitch2CtlOptions(this.optionValues)
    readonly o = this.options
    behavior?: Pitch2CtlBehavior
    constructor() {
      super()
      this.behavior = new Pitch2CtlBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.mode
      yield cv.noteOffAction
      yield cv.firstNote
      yield cv.numberOfSemitones
      yield cv.outMin
      yield cv.outMax
      yield cv.outController
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.mode = midiMaps[0]
      this.midiMaps.noteOffAction = midiMaps[1]
      this.midiMaps.firstNote = midiMaps[2]
      this.midiMaps.numberOfSemitones = midiMaps[3]
      this.midiMaps.outMin = midiMaps[4]
      this.midiMaps.outMax = midiMaps[5]
      this.midiMaps.outController = midiMaps[6]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.mode)
      a.push(this.midiMaps.noteOffAction)
      a.push(this.midiMaps.firstNote)
      a.push(this.midiMaps.numberOfSemitones)
      a.push(this.midiMaps.outMin)
      a.push(this.midiMaps.outMax)
      a.push(this.midiMaps.outController)
      return a
    }
  }
}
