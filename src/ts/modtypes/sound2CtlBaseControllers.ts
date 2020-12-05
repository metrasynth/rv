/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType"
import { Sound2CtlControllerValues } from "./sound2CtlControllerValues"
// @ts-ignore
// noinspection ES6UnusedImports
import { Channels } from "./sound2CtlEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { Mode } from "./sound2CtlEnums"
export class Sound2CtlBaseControllers implements Controllers {
  constructor(
    readonly module: ModuleType,
    readonly controllerValues: Sound2CtlControllerValues
  ) {}
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
  get channels(): Channels {
    return this.controllerValues.channels
  }
  // noinspection JSUnusedGlobalSymbols
  set channels(newValue: Channels) {
    const { controllerValues } = this
    controllerValues.channels = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get absolute(): boolean {
    return this.controllerValues.absolute
  }
  // noinspection JSUnusedGlobalSymbols
  set absolute(newValue: boolean) {
    const { controllerValues } = this
    controllerValues.absolute = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get gain(): number {
    return this.controllerValues.gain
  }
  // noinspection JSUnusedGlobalSymbols
  set gain(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 1024)
    controllerValues.gain = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get smooth(): number {
    return this.controllerValues.smooth
  }
  // noinspection JSUnusedGlobalSymbols
  set smooth(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.smooth = newValue
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
  get outController(): number {
    return this.controllerValues.outController
  }
  // noinspection JSUnusedGlobalSymbols
  set outController(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 255)
    controllerValues.outController = newValue
  }
}
