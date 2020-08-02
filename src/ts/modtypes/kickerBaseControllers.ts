/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers } from "./moduleType"
import { KickerControllerValues } from "./kickerControllerValues"
// @ts-ignore
// noinspection ES6UnusedImports
import { Waveform } from "./kickerEnums"
export class KickerBaseControllers implements Controllers {
  constructor(readonly controllerValues: KickerControllerValues) {}
  // noinspection JSUnusedGlobalSymbols
  get volume(): number {
    return this.controllerValues.volume
  }
  // noinspection JSUnusedGlobalSymbols
  set volume(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.volume = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get waveform(): Waveform {
    return this.controllerValues.waveform
  }
  // noinspection JSUnusedGlobalSymbols
  set waveform(newValue: Waveform) {
    const { controllerValues } = this
    controllerValues.waveform = newValue
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
  get attack(): number {
    return this.controllerValues.attack
  }
  // noinspection JSUnusedGlobalSymbols
  set attack(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 512)
    controllerValues.attack = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get release(): number {
    return this.controllerValues.release
  }
  // noinspection JSUnusedGlobalSymbols
  set release(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 512)
    controllerValues.release = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get boost(): number {
    return this.controllerValues.boost
  }
  // noinspection JSUnusedGlobalSymbols
  set boost(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 1024)
    controllerValues.boost = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get acceleration(): number {
    return this.controllerValues.acceleration
  }
  // noinspection JSUnusedGlobalSymbols
  set acceleration(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 1024)
    controllerValues.acceleration = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get polyphonyCh(): number {
    return this.controllerValues.polyphonyCh
  }
  // noinspection JSUnusedGlobalSymbols
  set polyphonyCh(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 1), 4)
    controllerValues.polyphonyCh = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get noClick(): boolean {
    return this.controllerValues.noClick
  }
  // noinspection JSUnusedGlobalSymbols
  set noClick(newValue: boolean) {
    const { controllerValues } = this
    controllerValues.noClick = newValue
  }
}
