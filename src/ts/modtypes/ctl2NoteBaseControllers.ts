/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType"
import { Ctl2NoteControllerValues } from "./ctl2NoteControllerValues"
// @ts-ignore
// noinspection ES6UnusedImports
import { NoteOn } from "./ctl2NoteEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { NoteOff } from "./ctl2NoteEnums"
export class Ctl2NoteBaseControllers implements Controllers {
  constructor(
    readonly module: ModuleType,
    readonly controllerValues: Ctl2NoteControllerValues
  ) {}
  // noinspection JSUnusedGlobalSymbols
  get pitch(): number {
    return this.controllerValues.pitch
  }
  // noinspection JSUnusedGlobalSymbols
  set pitch(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 32768)
    controllerValues.pitch = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get firstNote(): number {
    return this.controllerValues.firstNote
  }
  // noinspection JSUnusedGlobalSymbols
  set firstNote(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 120)
    controllerValues.firstNote = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get rangeSemitones(): number {
    return this.controllerValues.rangeSemitones
  }
  // noinspection JSUnusedGlobalSymbols
  set rangeSemitones(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 120)
    controllerValues.rangeSemitones = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get transpose(): number {
    return this.controllerValues.transpose + -128
  }
  // noinspection JSUnusedGlobalSymbols
  set transpose(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, -128), 128)
    controllerValues.transpose = newValue - -128
  }
  // noinspection JSUnusedGlobalSymbols
  get finetune(): number {
    return this.controllerValues.finetune + -256
  }
  // noinspection JSUnusedGlobalSymbols
  set finetune(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, -256), 256)
    controllerValues.finetune = newValue - -256
  }
  // noinspection JSUnusedGlobalSymbols
  get velocity(): number {
    return this.controllerValues.velocity
  }
  // noinspection JSUnusedGlobalSymbols
  set velocity(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.velocity = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get state(): boolean {
    return this.controllerValues.state
  }
  // noinspection JSUnusedGlobalSymbols
  set state(newValue: boolean) {
    const { controllerValues } = this
    controllerValues.state = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get noteOn(): NoteOn {
    return this.controllerValues.noteOn
  }
  // noinspection JSUnusedGlobalSymbols
  set noteOn(newValue: NoteOn) {
    const { controllerValues } = this
    controllerValues.noteOn = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get noteOff(): NoteOff {
    return this.controllerValues.noteOff
  }
  // noinspection JSUnusedGlobalSymbols
  set noteOff(newValue: NoteOff) {
    const { controllerValues } = this
    controllerValues.noteOff = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get recordNotes(): boolean {
    return this.controllerValues.recordNotes
  }
  // noinspection JSUnusedGlobalSymbols
  set recordNotes(newValue: boolean) {
    const { controllerValues } = this
    controllerValues.recordNotes = newValue
  }
}
