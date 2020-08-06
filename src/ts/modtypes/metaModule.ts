/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ModuleDataChunks } from "../moduleDataChunk"
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { Project } from "../project"
import { ModuleBase } from "./moduleBase"
import { ModuleType, OptionValues, Options } from "./moduleType"
import { MetaModuleBehavior } from "./metaModuleBehavior"
import { MetaModuleControllers } from "./metaModuleControllers"
import { MetaModuleControllerValues } from "./metaModuleControllerValues"
export namespace MetaModule {
  // Intentionally duplicated enums - see also metaModuleEnums.ts
  // (TypeScript does not allow exporting imported enums from inside a namespace)
  export enum PlayPatterns {
    // noinspection JSUnusedGlobalSymbols
    Off = 0,
    On = 1,
    OnNoRepeat = 2,
  }
  export enum CtlNum {
    Volume = 1,
    InputModule = 2,
    PlayPatterns = 3,
    Bpm = 4,
    Tpl = 5,
  }
  interface MetaModuleControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    inputModule: ControllerMidiMap
    playPatterns: ControllerMidiMap
    bpm: ControllerMidiMap
    tpl: ControllerMidiMap
  }
  interface MetaModuleOptionValues extends OptionValues {
    userDefinedControllers: number
    arpeggiator: boolean
    applyVelocityToProject: boolean
    eventOutput: boolean
  }
  class MetaModuleOptions implements Options {
    constructor(readonly optionValues: MetaModuleOptionValues) {}
    // noinspection JSUnusedGlobalSymbols
    get userDefinedControllers(): number {
      return this.optionValues.userDefinedControllers
    }
    // noinspection JSUnusedGlobalSymbols
    set userDefinedControllers(newValue: number) {
      if (newValue < 0 || newValue > 27) {
        throw new Error("Option value is out of range")
      }
      this.optionValues.userDefinedControllers = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get arpeggiator(): boolean {
      return this.optionValues.arpeggiator
    }
    // noinspection JSUnusedGlobalSymbols
    set arpeggiator(newValue: boolean) {
      this.optionValues.arpeggiator = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get applyVelocityToProject(): boolean {
      return this.optionValues.applyVelocityToProject
    }
    // noinspection JSUnusedGlobalSymbols
    set applyVelocityToProject(newValue: boolean) {
      this.optionValues.applyVelocityToProject = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get eventOutput(): boolean {
      return this.optionValues.eventOutput
    }
    // noinspection JSUnusedGlobalSymbols
    set eventOutput(newValue: boolean) {
      this.optionValues.eventOutput = newValue
    }
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "MetaModule"
    flags = 32849
    readonly typeName = "MetaModule"
    readonly optionsChnm = 2
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.inputModule = val
      },
      (val: number) => {
        this.controllerValues.playPatterns = val
      },
      (val: number) => {
        this.controllerValues.bpm = val
      },
      (val: number) => {
        this.controllerValues.tpl = val
      },
    ]
    readonly controllerValues: MetaModuleControllerValues = {
      volume: 256,
      inputModule: 1,
      playPatterns: PlayPatterns.Off,
      bpm: 125,
      tpl: 6,
    }
    readonly controllers: MetaModuleControllers = new MetaModuleControllers(
      this,
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: MetaModuleControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      inputModule: new ControllerMidiMap(),
      playPatterns: new ControllerMidiMap(),
      bpm: new ControllerMidiMap(),
      tpl: new ControllerMidiMap(),
    }
    readonly optionValues: MetaModuleOptionValues = {
      userDefinedControllers: 0,
      arpeggiator: false,
      applyVelocityToProject: false,
      eventOutput: true,
    }
    readonly options: MetaModuleOptions = new MetaModuleOptions(this.optionValues)
    readonly o = this.options
    behavior?: MetaModuleBehavior
    constructor() {
      super()
      this.behavior = new MetaModuleBehavior(this)
    }
    attachTo(project: Project): AttachedModule {
      return super.attachTo(project) as AttachedModule
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.inputModule
      yield cv.playPatterns
      yield cv.bpm
      yield cv.tpl
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.inputModule = midiMaps[1]
      this.midiMaps.playPatterns = midiMaps[2]
      this.midiMaps.bpm = midiMaps[3]
      this.midiMaps.tpl = midiMaps[4]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.inputModule)
      a.push(this.midiMaps.playPatterns)
      a.push(this.midiMaps.bpm)
      a.push(this.midiMaps.tpl)
      return a
    }
    rawOptionBytes(): Uint8Array {
      const bytes = new Uint8Array(4)
      const { optionValues: ov } = this
      bytes[0] = ov.userDefinedControllers
      bytes[1] = Number(ov.arpeggiator)
      bytes[2] = Number(ov.applyVelocityToProject)
      bytes[3] = Number(!ov.eventOutput)
      return bytes
    }
    setOptions(dataChunks: ModuleDataChunks) {
      let chdt
      for (const dataChunk of dataChunks) {
        if (dataChunk.chnm == this.optionsChnm) {
          chdt = dataChunk.chdt
          break
        }
      }
      if (chdt) {
        this.optionValues.userDefinedControllers = chdt[0]
        this.optionValues.arpeggiator = Boolean(chdt[1])
        this.optionValues.applyVelocityToProject = Boolean(chdt[2])
        this.optionValues.eventOutput = !Boolean(chdt[3])
      }
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
