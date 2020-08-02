/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers } from "./moduleType"
import { MultiSynthControllerValues } from "./multiSynthControllerValues"
export class MultiSynthBaseControllers implements Controllers {
  constructor(readonly controllerValues: MultiSynthControllerValues) {}
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
  get randomPitch(): number {
    return this.controllerValues.randomPitch
  }
  // noinspection JSUnusedGlobalSymbols
  set randomPitch(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 4096)
    controllerValues.randomPitch = newValue
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
  get randomPhase(): number {
    return this.controllerValues.randomPhase
  }
  // noinspection JSUnusedGlobalSymbols
  set randomPhase(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 32768)
    controllerValues.randomPhase = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get randomVelocity(): number {
    return this.controllerValues.randomVelocity
  }
  // noinspection JSUnusedGlobalSymbols
  set randomVelocity(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 32768)
    controllerValues.randomVelocity = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get phase(): number {
    return this.controllerValues.phase
  }
  // noinspection JSUnusedGlobalSymbols
  set phase(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 32768)
    controllerValues.phase = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get curve2Influence(): number {
    return this.controllerValues.curve2Influence
  }
  // noinspection JSUnusedGlobalSymbols
  set curve2Influence(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.curve2Influence = newValue
  }
}
