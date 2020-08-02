/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { Project } from "../project"
import { ModuleBase } from "./moduleBase"
import { ModuleType, OptionValues, Options } from "./moduleType"
import { VorbisPlayerBehavior } from "./vorbisPlayerBehavior"
import { VorbisPlayerControllers } from "./vorbisPlayerControllers"
import { VorbisPlayerControllerValues } from "./vorbisPlayerControllerValues"
export namespace VorbisPlayer {
  interface VorbisPlayerControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    originalSpeed: ControllerMidiMap
    finetune: ControllerMidiMap
    transpose: ControllerMidiMap
    interpolation: ControllerMidiMap
    polyphonyCh: ControllerMidiMap
    repeat: ControllerMidiMap
  }
  interface VorbisPlayerOptionValues extends OptionValues {}
  class VorbisPlayerOptions implements Options {
    constructor(readonly optionValues: VorbisPlayerOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Vorbis player"
    flags = 32841
    readonly typeName = "Vorbis player"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.originalSpeed = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.finetune = val
      },
      (val: number) => {
        this.controllerValues.transpose = val
      },
      (val: number) => {
        this.controllerValues.interpolation = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.polyphonyCh = val
      },
      (val: number) => {
        this.controllerValues.repeat = Boolean(val)
      },
    ]
    readonly controllerValues: VorbisPlayerControllerValues = {
      volume: 256,
      originalSpeed: true,
      finetune: 0,
      transpose: 0,
      interpolation: true,
      polyphonyCh: 1,
      repeat: false,
    }
    readonly controllers: VorbisPlayerControllers = new VorbisPlayerControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: VorbisPlayerControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      originalSpeed: new ControllerMidiMap(),
      finetune: new ControllerMidiMap(),
      transpose: new ControllerMidiMap(),
      interpolation: new ControllerMidiMap(),
      polyphonyCh: new ControllerMidiMap(),
      repeat: new ControllerMidiMap(),
    }
    readonly optionValues: VorbisPlayerOptionValues = {}
    readonly options: VorbisPlayerOptions = new VorbisPlayerOptions(this.optionValues)
    readonly o = this.options
    behavior?: VorbisPlayerBehavior
    constructor() {
      super()
      this.behavior = new VorbisPlayerBehavior(this)
    }
    attachTo(project: Project): AttachedModule {
      return super.attachTo(project) as AttachedModule
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield Number(cv.originalSpeed)
      yield cv.finetune
      yield cv.transpose
      yield Number(cv.interpolation)
      yield cv.polyphonyCh
      yield Number(cv.repeat)
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.originalSpeed = midiMaps[1]
      this.midiMaps.finetune = midiMaps[2]
      this.midiMaps.transpose = midiMaps[3]
      this.midiMaps.interpolation = midiMaps[4]
      this.midiMaps.polyphonyCh = midiMaps[5]
      this.midiMaps.repeat = midiMaps[6]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.originalSpeed)
      a.push(this.midiMaps.finetune)
      a.push(this.midiMaps.transpose)
      a.push(this.midiMaps.interpolation)
      a.push(this.midiMaps.polyphonyCh)
      a.push(this.midiMaps.repeat)
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
