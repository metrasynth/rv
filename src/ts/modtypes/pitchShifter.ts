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
import { PitchShifterBehavior } from "./pitchShifterBehavior"
export namespace PitchShifter {
  export const enum Mode {
    // noinspection JSUnusedGlobalSymbols
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3,
  }
  interface PitchShifterControllerValues extends ControllerValues {
    volume: number
    pitch: number
    pitchScale: number
    feedback: number
    grainSize: number
    mode: Mode
  }
  class PitchShifterControllers implements Controllers {
    constructor(readonly controllerValues: PitchShifterControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get volume(): number {
      return this.controllerValues.volume
    }
    // noinspection JSUnusedGlobalSymbols
    set volume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.volume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get pitch(): number {
      return this.controllerValues.pitch + -600
    }
    // noinspection JSUnusedGlobalSymbols
    set pitch(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -600), 600)
      controllerValues.pitch = newValue - -600
    }
    // noinspection JSUnusedGlobalSymbols
    get pitchScale(): number {
      return this.controllerValues.pitchScale
    }
    // noinspection JSUnusedGlobalSymbols
    set pitchScale(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 200)
      controllerValues.pitchScale = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get feedback(): number {
      return this.controllerValues.feedback
    }
    // noinspection JSUnusedGlobalSymbols
    set feedback(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.feedback = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get grainSize(): number {
      return this.controllerValues.grainSize
    }
    // noinspection JSUnusedGlobalSymbols
    set grainSize(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.grainSize = newValue
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
  }
  interface PitchShifterControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    pitch: ControllerMidiMap
    pitchScale: ControllerMidiMap
    feedback: ControllerMidiMap
    grainSize: ControllerMidiMap
    mode: ControllerMidiMap
  }
  interface PitchShifterOptionValues extends OptionValues {}
  class PitchShifterOptions implements Options {
    constructor(readonly optionValues: PitchShifterOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Pitch shifter"
    flags = 0
    readonly typeName = "Pitch shifter"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.pitch = val
      },
      (val: number) => {
        this.controllerValues.pitchScale = val
      },
      (val: number) => {
        this.controllerValues.feedback = val
      },
      (val: number) => {
        this.controllerValues.grainSize = val
      },
      (val: number) => {
        this.controllerValues.mode = val
      },
    ]
    readonly controllerValues: PitchShifterControllerValues = {
      volume: 256,
      pitch: 0,
      pitchScale: 100,
      feedback: 0,
      grainSize: 64,
      mode: Mode.Hq,
    }
    readonly controllers: PitchShifterControllers = new PitchShifterControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: PitchShifterControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      pitch: new ControllerMidiMap(),
      pitchScale: new ControllerMidiMap(),
      feedback: new ControllerMidiMap(),
      grainSize: new ControllerMidiMap(),
      mode: new ControllerMidiMap(),
    }
    readonly optionValues: PitchShifterOptionValues = {}
    readonly options: PitchShifterOptions = new PitchShifterOptions(this.optionValues)
    readonly o = this.options
    behavior?: PitchShifterBehavior
    constructor() {
      super()
      this.behavior = new PitchShifterBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.pitch
      yield cv.pitchScale
      yield cv.feedback
      yield cv.grainSize
      yield cv.mode
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.pitch = midiMaps[1]
      this.midiMaps.pitchScale = midiMaps[2]
      this.midiMaps.feedback = midiMaps[3]
      this.midiMaps.grainSize = midiMaps[4]
      this.midiMaps.mode = midiMaps[5]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.pitch)
      a.push(this.midiMaps.pitchScale)
      a.push(this.midiMaps.feedback)
      a.push(this.midiMaps.grainSize)
      a.push(this.midiMaps.mode)
      return a
    }
  }
}
