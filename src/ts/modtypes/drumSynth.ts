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
import { DrumSynthBehavior } from "./drumSynthBehavior"
export namespace DrumSynth {
  interface DrumSynthControllerValues extends ControllerValues {
    volume: number
    panning: number
    polyphonyCh: number
    bassVolume: number
    bassPower: number
    bassTone: number
    bassLength: number
    hihatVolume: number
    hihatLength: number
    snareVolume: number
    snareTone: number
    snareLength: number
    bassPanning: number
    hihatPanning: number
    snarePanning: number
  }
  class DrumSynthControllers implements Controllers {
    constructor(readonly controllerValues: DrumSynthControllerValues) {}
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
    get panning(): number {
      return this.controllerValues.panning + -128
    }
    // noinspection JSUnusedGlobalSymbols
    set panning(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -128), 128)
      controllerValues.panning = newValue - -128
    }
    // noinspection JSUnusedGlobalSymbols
    get polyphonyCh(): number {
      return this.controllerValues.polyphonyCh
    }
    // noinspection JSUnusedGlobalSymbols
    set polyphonyCh(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 1), 8)
      controllerValues.polyphonyCh = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get bassVolume(): number {
      return this.controllerValues.bassVolume
    }
    // noinspection JSUnusedGlobalSymbols
    set bassVolume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.bassVolume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get bassPower(): number {
      return this.controllerValues.bassPower
    }
    // noinspection JSUnusedGlobalSymbols
    set bassPower(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.bassPower = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get bassTone(): number {
      return this.controllerValues.bassTone
    }
    // noinspection JSUnusedGlobalSymbols
    set bassTone(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.bassTone = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get bassLength(): number {
      return this.controllerValues.bassLength
    }
    // noinspection JSUnusedGlobalSymbols
    set bassLength(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.bassLength = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get hihatVolume(): number {
      return this.controllerValues.hihatVolume
    }
    // noinspection JSUnusedGlobalSymbols
    set hihatVolume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.hihatVolume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get hihatLength(): number {
      return this.controllerValues.hihatLength
    }
    // noinspection JSUnusedGlobalSymbols
    set hihatLength(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.hihatLength = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get snareVolume(): number {
      return this.controllerValues.snareVolume
    }
    // noinspection JSUnusedGlobalSymbols
    set snareVolume(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 512)
      controllerValues.snareVolume = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get snareTone(): number {
      return this.controllerValues.snareTone
    }
    // noinspection JSUnusedGlobalSymbols
    set snareTone(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.snareTone = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get snareLength(): number {
      return this.controllerValues.snareLength
    }
    // noinspection JSUnusedGlobalSymbols
    set snareLength(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.snareLength = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get bassPanning(): number {
      return this.controllerValues.bassPanning + -128
    }
    // noinspection JSUnusedGlobalSymbols
    set bassPanning(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -128), 128)
      controllerValues.bassPanning = newValue - -128
    }
    // noinspection JSUnusedGlobalSymbols
    get hihatPanning(): number {
      return this.controllerValues.hihatPanning + -128
    }
    // noinspection JSUnusedGlobalSymbols
    set hihatPanning(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -128), 128)
      controllerValues.hihatPanning = newValue - -128
    }
    // noinspection JSUnusedGlobalSymbols
    get snarePanning(): number {
      return this.controllerValues.snarePanning + -128
    }
    // noinspection JSUnusedGlobalSymbols
    set snarePanning(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, -128), 128)
      controllerValues.snarePanning = newValue - -128
    }
  }
  interface DrumSynthControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    panning: ControllerMidiMap
    polyphonyCh: ControllerMidiMap
    bassVolume: ControllerMidiMap
    bassPower: ControllerMidiMap
    bassTone: ControllerMidiMap
    bassLength: ControllerMidiMap
    hihatVolume: ControllerMidiMap
    hihatLength: ControllerMidiMap
    snareVolume: ControllerMidiMap
    snareTone: ControllerMidiMap
    snareLength: ControllerMidiMap
    bassPanning: ControllerMidiMap
    hihatPanning: ControllerMidiMap
    snarePanning: ControllerMidiMap
  }
  interface DrumSynthOptionValues extends OptionValues {}
  class DrumSynthOptions implements Options {
    constructor(readonly optionValues: DrumSynthOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "DrumSynth"
    flags = 0
    readonly typeName = "DrumSynth"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.panning = val
      },
      (val: number) => {
        this.controllerValues.polyphonyCh = val
      },
      (val: number) => {
        this.controllerValues.bassVolume = val
      },
      (val: number) => {
        this.controllerValues.bassPower = val
      },
      (val: number) => {
        this.controllerValues.bassTone = val
      },
      (val: number) => {
        this.controllerValues.bassLength = val
      },
      (val: number) => {
        this.controllerValues.hihatVolume = val
      },
      (val: number) => {
        this.controllerValues.hihatLength = val
      },
      (val: number) => {
        this.controllerValues.snareVolume = val
      },
      (val: number) => {
        this.controllerValues.snareTone = val
      },
      (val: number) => {
        this.controllerValues.snareLength = val
      },
      (val: number) => {
        this.controllerValues.bassPanning = val
      },
      (val: number) => {
        this.controllerValues.hihatPanning = val
      },
      (val: number) => {
        this.controllerValues.snarePanning = val
      },
    ]
    readonly controllerValues: DrumSynthControllerValues = {
      volume: 256,
      panning: 0,
      polyphonyCh: 4,
      bassVolume: 200,
      bassPower: 256,
      bassTone: 64,
      bassLength: 64,
      hihatVolume: 256,
      hihatLength: 64,
      snareVolume: 256,
      snareTone: 128,
      snareLength: 64,
      bassPanning: 0,
      hihatPanning: 0,
      snarePanning: 0,
    }
    readonly controllers: DrumSynthControllers = new DrumSynthControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: DrumSynthControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      panning: new ControllerMidiMap(),
      polyphonyCh: new ControllerMidiMap(),
      bassVolume: new ControllerMidiMap(),
      bassPower: new ControllerMidiMap(),
      bassTone: new ControllerMidiMap(),
      bassLength: new ControllerMidiMap(),
      hihatVolume: new ControllerMidiMap(),
      hihatLength: new ControllerMidiMap(),
      snareVolume: new ControllerMidiMap(),
      snareTone: new ControllerMidiMap(),
      snareLength: new ControllerMidiMap(),
      bassPanning: new ControllerMidiMap(),
      hihatPanning: new ControllerMidiMap(),
      snarePanning: new ControllerMidiMap(),
    }
    readonly optionValues: DrumSynthOptionValues = {}
    readonly options: DrumSynthOptions = new DrumSynthOptions(this.optionValues)
    readonly o = this.options
    behavior?: DrumSynthBehavior
    constructor() {
      super()
      this.behavior = new DrumSynthBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.panning
      yield cv.polyphonyCh
      yield cv.bassVolume
      yield cv.bassPower
      yield cv.bassTone
      yield cv.bassLength
      yield cv.hihatVolume
      yield cv.hihatLength
      yield cv.snareVolume
      yield cv.snareTone
      yield cv.snareLength
      yield cv.bassPanning
      yield cv.hihatPanning
      yield cv.snarePanning
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.panning = midiMaps[1]
      this.midiMaps.polyphonyCh = midiMaps[2]
      this.midiMaps.bassVolume = midiMaps[3]
      this.midiMaps.bassPower = midiMaps[4]
      this.midiMaps.bassTone = midiMaps[5]
      this.midiMaps.bassLength = midiMaps[6]
      this.midiMaps.hihatVolume = midiMaps[7]
      this.midiMaps.hihatLength = midiMaps[8]
      this.midiMaps.snareVolume = midiMaps[9]
      this.midiMaps.snareTone = midiMaps[10]
      this.midiMaps.snareLength = midiMaps[11]
      this.midiMaps.bassPanning = midiMaps[12]
      this.midiMaps.hihatPanning = midiMaps[13]
      this.midiMaps.snarePanning = midiMaps[14]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.panning)
      a.push(this.midiMaps.polyphonyCh)
      a.push(this.midiMaps.bassVolume)
      a.push(this.midiMaps.bassPower)
      a.push(this.midiMaps.bassTone)
      a.push(this.midiMaps.bassLength)
      a.push(this.midiMaps.hihatVolume)
      a.push(this.midiMaps.hihatLength)
      a.push(this.midiMaps.snareVolume)
      a.push(this.midiMaps.snareTone)
      a.push(this.midiMaps.snareLength)
      a.push(this.midiMaps.bassPanning)
      a.push(this.midiMaps.hihatPanning)
      a.push(this.midiMaps.snarePanning)
      return a
    }
  }
}
