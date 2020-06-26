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
import { GlideBehavior } from "./glideBehavior"
export namespace Glide {
  interface GlideControllerValues extends ControllerValues {
    response: number
    sampleRateHz: number
    offsetOn_1stNote: boolean
    polyphony: boolean
    pitch: number
    pitchScale: number
    reset: boolean
  }
  class GlideControllers implements Controllers {
    constructor(readonly controllerValues: GlideControllerValues) {}
    // noinspection JSUnusedGlobalSymbols
    get response(): number {
      return this.controllerValues.response
    }
    // noinspection JSUnusedGlobalSymbols
    set response(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 1000)
      controllerValues.response = newValue
    }
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
    get offsetOn_1stNote(): boolean {
      return this.controllerValues.offsetOn_1stNote
    }
    // noinspection JSUnusedGlobalSymbols
    set offsetOn_1stNote(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.offsetOn_1stNote = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get polyphony(): boolean {
      return this.controllerValues.polyphony
    }
    // noinspection JSUnusedGlobalSymbols
    set polyphony(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.polyphony = newValue
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
    get reset(): boolean {
      return this.controllerValues.reset
    }
    // noinspection JSUnusedGlobalSymbols
    set reset(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.reset = newValue
    }
  }
  interface GlideControllerMidiMaps extends ControllerMidiMaps {
    response: ControllerMidiMap
    sampleRateHz: ControllerMidiMap
    offsetOn_1stNote: ControllerMidiMap
    polyphony: ControllerMidiMap
    pitch: ControllerMidiMap
    pitchScale: ControllerMidiMap
    reset: ControllerMidiMap
  }
  interface GlideOptionValues extends OptionValues {}
  class GlideOptions implements Options {
    constructor(readonly optionValues: GlideOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    readonly name = "Glide"
    readonly typeName = "Glide"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.response = val
      },
      (val: number) => {
        this.controllerValues.sampleRateHz = val
      },
      (val: number) => {
        this.controllerValues.offsetOn_1stNote = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.polyphony = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.pitch = val
      },
      (val: number) => {
        this.controllerValues.pitchScale = val
      },
      (val: number) => {
        this.controllerValues.reset = Boolean(val)
      },
    ]
    readonly controllerValues: GlideControllerValues = {
      response: 500,
      sampleRateHz: 150,
      offsetOn_1stNote: false,
      polyphony: true,
      pitch: 0,
      pitchScale: 100,
      reset: false,
    }
    readonly controllers: GlideControllers = new GlideControllers(this.controllerValues)
    readonly c = this.controllers
    readonly midiMaps: GlideControllerMidiMaps = {
      response: new ControllerMidiMap(),
      sampleRateHz: new ControllerMidiMap(),
      offsetOn_1stNote: new ControllerMidiMap(),
      polyphony: new ControllerMidiMap(),
      pitch: new ControllerMidiMap(),
      pitchScale: new ControllerMidiMap(),
      reset: new ControllerMidiMap(),
    }
    readonly optionValues: GlideOptionValues = {}
    readonly options: GlideOptions = new GlideOptions(this.optionValues)
    readonly o = this.options
    behavior?: GlideBehavior
    constructor() {
      super()
      this.behavior = new GlideBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.response
      yield cv.sampleRateHz
      yield Number(cv.offsetOn_1stNote)
      yield Number(cv.polyphony)
      yield cv.pitch
      yield cv.pitchScale
      yield Number(cv.reset)
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.response = midiMaps[0]
      this.midiMaps.sampleRateHz = midiMaps[1]
      this.midiMaps.offsetOn_1stNote = midiMaps[2]
      this.midiMaps.polyphony = midiMaps[3]
      this.midiMaps.pitch = midiMaps[4]
      this.midiMaps.pitchScale = midiMaps[5]
      this.midiMaps.reset = midiMaps[6]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.response)
      a.push(this.midiMaps.sampleRateHz)
      a.push(this.midiMaps.offsetOn_1stNote)
      a.push(this.midiMaps.polyphony)
      a.push(this.midiMaps.pitch)
      a.push(this.midiMaps.pitchScale)
      a.push(this.midiMaps.reset)
      return a
    }
  }
}
