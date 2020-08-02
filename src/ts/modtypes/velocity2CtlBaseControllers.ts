/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers } from "./moduleType"
import { Velocity2CtlControllerValues } from "./velocity2CtlControllerValues"
// @ts-ignore
// noinspection ES6UnusedImports
import { NoteOffAction } from "./velocity2CtlEnums"
export class Velocity2CtlBaseControllers implements Controllers {
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
