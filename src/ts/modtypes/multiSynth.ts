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
import { MultiSynthBehavior } from "./multiSynthBehavior"
import { MultiSynthControllers } from "./multiSynthControllers"
import { MultiSynthControllerValues } from "./multiSynthControllerValues"
export namespace MultiSynth {
  // Intentionally duplicated enums - see also multiSynthEnums.ts
  // (TypeScript does not allow exporting imported enums from inside a namespace)
  export enum ActiveCurve {
    // noinspection JSUnusedGlobalSymbols
    NoteVelocity = 0,
    VelocityVelocity = 1,
    NotePitch = 2,
  }
  export enum CtlNum {
    Transpose = 1,
    RandomPitch = 2,
    Velocity = 3,
    Finetune = 4,
    RandomPhase = 5,
    RandomVelocity = 6,
    Phase = 7,
    Curve2Influence = 8,
  }
  interface MultiSynthControllerMidiMaps extends ControllerMidiMaps {
    transpose: ControllerMidiMap
    randomPitch: ControllerMidiMap
    velocity: ControllerMidiMap
    finetune: ControllerMidiMap
    randomPhase: ControllerMidiMap
    randomVelocity: ControllerMidiMap
    phase: ControllerMidiMap
    curve2Influence: ControllerMidiMap
  }
  interface MultiSynthOptionValues extends OptionValues {
    useStaticNote_C5: boolean
    ignoreNotesWithZeroVelocity: boolean
    activeCurve: ActiveCurve
    trigger: boolean
    generateMissedNoteOffCommands: boolean
    roundNoteX: boolean
    roundPitchY: boolean
    recordNotesToScaleCurve: boolean
    outNoteEqOutNoteMinusInNotePlus_C5: boolean
    outPortEqNoteModNumOfOuts: boolean
    outPortEqChannelModNumOfOuts: boolean
  }
  class MultiSynthOptions implements Options {
    constructor(readonly optionValues: MultiSynthOptionValues) {}
    // noinspection JSUnusedGlobalSymbols
    get useStaticNote_C5(): boolean {
      return this.optionValues.useStaticNote_C5
    }
    // noinspection JSUnusedGlobalSymbols
    set useStaticNote_C5(newValue: boolean) {
      this.optionValues.useStaticNote_C5 = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get ignoreNotesWithZeroVelocity(): boolean {
      return this.optionValues.ignoreNotesWithZeroVelocity
    }
    // noinspection JSUnusedGlobalSymbols
    set ignoreNotesWithZeroVelocity(newValue: boolean) {
      this.optionValues.ignoreNotesWithZeroVelocity = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get activeCurve(): ActiveCurve {
      return this.optionValues.activeCurve
    }
    // noinspection JSUnusedGlobalSymbols
    set activeCurve(newValue: ActiveCurve) {
      this.optionValues.activeCurve = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get trigger(): boolean {
      return this.optionValues.trigger
    }
    // noinspection JSUnusedGlobalSymbols
    set trigger(newValue: boolean) {
      this.optionValues.trigger = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get generateMissedNoteOffCommands(): boolean {
      return this.optionValues.generateMissedNoteOffCommands
    }
    // noinspection JSUnusedGlobalSymbols
    set generateMissedNoteOffCommands(newValue: boolean) {
      this.optionValues.generateMissedNoteOffCommands = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get roundNoteX(): boolean {
      return this.optionValues.roundNoteX
    }
    // noinspection JSUnusedGlobalSymbols
    set roundNoteX(newValue: boolean) {
      this.optionValues.roundNoteX = newValue
      this.optionValues.roundPitchY = false
    }
    // noinspection JSUnusedGlobalSymbols
    get roundPitchY(): boolean {
      return this.optionValues.roundPitchY
    }
    // noinspection JSUnusedGlobalSymbols
    set roundPitchY(newValue: boolean) {
      this.optionValues.roundPitchY = newValue
      this.optionValues.roundNoteX = false
    }
    // noinspection JSUnusedGlobalSymbols
    get recordNotesToScaleCurve(): boolean {
      return this.optionValues.recordNotesToScaleCurve
    }
    // noinspection JSUnusedGlobalSymbols
    set recordNotesToScaleCurve(newValue: boolean) {
      this.optionValues.recordNotesToScaleCurve = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get outNoteEqOutNoteMinusInNotePlus_C5(): boolean {
      return this.optionValues.outNoteEqOutNoteMinusInNotePlus_C5
    }
    // noinspection JSUnusedGlobalSymbols
    set outNoteEqOutNoteMinusInNotePlus_C5(newValue: boolean) {
      this.optionValues.outNoteEqOutNoteMinusInNotePlus_C5 = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get outPortEqNoteModNumOfOuts(): boolean {
      return this.optionValues.outPortEqNoteModNumOfOuts
    }
    // noinspection JSUnusedGlobalSymbols
    set outPortEqNoteModNumOfOuts(newValue: boolean) {
      this.optionValues.outPortEqNoteModNumOfOuts = newValue
      this.optionValues.outPortEqChannelModNumOfOuts = false
    }
    // noinspection JSUnusedGlobalSymbols
    get outPortEqChannelModNumOfOuts(): boolean {
      return this.optionValues.outPortEqChannelModNumOfOuts
    }
    // noinspection JSUnusedGlobalSymbols
    set outPortEqChannelModNumOfOuts(newValue: boolean) {
      this.optionValues.outPortEqChannelModNumOfOuts = newValue
      this.optionValues.outPortEqNoteModNumOfOuts = false
    }
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "MultiSynth"
    flags = 16912457
    readonly typeName = "MultiSynth"
    readonly optionsChnm = 1
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.transpose = val
      },
      (val: number) => {
        this.controllerValues.randomPitch = val
      },
      (val: number) => {
        this.controllerValues.velocity = val
      },
      (val: number) => {
        this.controllerValues.finetune = val
      },
      (val: number) => {
        this.controllerValues.randomPhase = val
      },
      (val: number) => {
        this.controllerValues.randomVelocity = val
      },
      (val: number) => {
        this.controllerValues.phase = val
      },
      (val: number) => {
        this.controllerValues.curve2Influence = val
      },
    ]
    readonly controllerValues: MultiSynthControllerValues = {
      transpose: 0,
      randomPitch: 0,
      velocity: 256,
      finetune: 0,
      randomPhase: 0,
      randomVelocity: 0,
      phase: 0,
      curve2Influence: 256,
    }
    readonly controllers: MultiSynthControllers = new MultiSynthControllers(
      this,
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: MultiSynthControllerMidiMaps = {
      transpose: new ControllerMidiMap(),
      randomPitch: new ControllerMidiMap(),
      velocity: new ControllerMidiMap(),
      finetune: new ControllerMidiMap(),
      randomPhase: new ControllerMidiMap(),
      randomVelocity: new ControllerMidiMap(),
      phase: new ControllerMidiMap(),
      curve2Influence: new ControllerMidiMap(),
    }
    readonly optionValues: MultiSynthOptionValues = {
      useStaticNote_C5: false,
      ignoreNotesWithZeroVelocity: false,
      activeCurve: ActiveCurve.NoteVelocity,
      trigger: false,
      generateMissedNoteOffCommands: false,
      roundNoteX: false,
      roundPitchY: false,
      recordNotesToScaleCurve: false,
      outNoteEqOutNoteMinusInNotePlus_C5: false,
      outPortEqNoteModNumOfOuts: false,
      outPortEqChannelModNumOfOuts: false,
    }
    readonly options: MultiSynthOptions = new MultiSynthOptions(this.optionValues)
    readonly o = this.options
    behavior?: MultiSynthBehavior
    constructor() {
      super()
      this.behavior = new MultiSynthBehavior(this)
    }
    attachTo(project: Project): AttachedModule {
      return super.attachTo(project) as AttachedModule
    }
    setRawControllerValue(ctlNum: number, value: number) {
      const { controllerValues: cv } = this
      switch (ctlNum) {
        case 1:
          cv.transpose = value
          break
        case 2:
          cv.randomPitch = value
          break
        case 3:
          cv.velocity = value
          break
        case 4:
          cv.finetune = value
          break
        case 5:
          cv.randomPhase = value
          break
        case 6:
          cv.randomVelocity = value
          break
        case 7:
          cv.phase = value
          break
        case 8:
          cv.curve2Influence = value
          break
      }
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.transpose
      yield cv.randomPitch
      yield cv.velocity
      yield cv.finetune
      yield cv.randomPhase
      yield cv.randomVelocity
      yield cv.phase
      yield cv.curve2Influence
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.transpose = midiMaps[0] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.randomPitch = midiMaps[1] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.velocity = midiMaps[2] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.finetune = midiMaps[3] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.randomPhase = midiMaps[4] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.randomVelocity = midiMaps[5] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.phase = midiMaps[6] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
      this.midiMaps.curve2Influence = midiMaps[7] || {
        channel: 0,
        messageType: 0,
        messageParameter: 0,
        slope: 0,
      }
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.transpose)
      a.push(this.midiMaps.randomPitch)
      a.push(this.midiMaps.velocity)
      a.push(this.midiMaps.finetune)
      a.push(this.midiMaps.randomPhase)
      a.push(this.midiMaps.randomVelocity)
      a.push(this.midiMaps.phase)
      a.push(this.midiMaps.curve2Influence)
      return a
    }
    rawOptionBytes(): Uint8Array {
      const bytes = new Uint8Array(11)
      const { optionValues: ov } = this
      bytes[0] |= (Number(ov.useStaticNote_C5) & (2 ** 1 - 1)) << 0
      bytes[1] |= (Number(ov.ignoreNotesWithZeroVelocity) & (2 ** 1 - 1)) << 0
      bytes[2] |= (Number(ov.activeCurve) & (2 ** 2 - 1)) << 0
      bytes[3] |= (Number(ov.trigger) & (2 ** 1 - 1)) << 0
      bytes[4] |= (Number(ov.generateMissedNoteOffCommands) & (2 ** 1 - 1)) << 0
      bytes[4] |= (Number(ov.roundNoteX) & (2 ** 1 - 1)) << 1
      bytes[4] |= (Number(ov.roundPitchY) & (2 ** 1 - 1)) << 2
      bytes[4] |= (Number(ov.recordNotesToScaleCurve) & (2 ** 1 - 1)) << 3
      bytes[4] |= (Number(ov.outNoteEqOutNoteMinusInNotePlus_C5) & (2 ** 1 - 1)) << 6
      bytes[4] |= (Number(ov.outPortEqNoteModNumOfOuts) & (2 ** 1 - 1)) << 7
      bytes[4] |= (Number(ov.outPortEqChannelModNumOfOuts) & (2 ** 1 - 1)) << 8
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
        this.optionValues.useStaticNote_C5 = Boolean((chdt[0] >> 0) & (2 ** 1 - 1))
        this.optionValues.ignoreNotesWithZeroVelocity = Boolean(
          (chdt[1] >> 0) & (2 ** 1 - 1)
        )
        this.optionValues.activeCurve = (chdt[2] >> 0) & (2 ** 2 - 1)
        this.optionValues.trigger = Boolean((chdt[3] >> 0) & (2 ** 1 - 1))
        this.optionValues.generateMissedNoteOffCommands = Boolean(
          (chdt[4] >> 0) & (2 ** 1 - 1)
        )
        this.optionValues.roundNoteX = Boolean((chdt[4] >> 1) & (2 ** 1 - 1))
        this.optionValues.roundPitchY = Boolean((chdt[4] >> 2) & (2 ** 1 - 1))
        this.optionValues.recordNotesToScaleCurve = Boolean(
          (chdt[4] >> 3) & (2 ** 1 - 1)
        )
        this.optionValues.outNoteEqOutNoteMinusInNotePlus_C5 = Boolean(
          (chdt[4] >> 6) & (2 ** 1 - 1)
        )
        this.optionValues.outPortEqNoteModNumOfOuts = Boolean(
          (chdt[4] >> 7) & (2 ** 1 - 1)
        )
        this.optionValues.outPortEqChannelModNumOfOuts = Boolean(
          (chdt[4] >> 8) & (2 ** 1 - 1)
        )
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
