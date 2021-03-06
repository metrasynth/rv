/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType"
import { VocalFilterControllerValues } from "./vocalFilterControllerValues"
// @ts-ignore
// noinspection ES6UnusedImports
import { VoiceType } from "./vocalFilterEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { Channels } from "./vocalFilterEnums"
export class VocalFilterBaseControllers implements Controllers {
  constructor(
    readonly module: ModuleType,
    readonly controllerValues: VocalFilterControllerValues
  ) {}
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
  get formantWidthHz(): number {
    return this.controllerValues.formantWidthHz
  }
  // noinspection JSUnusedGlobalSymbols
  set formantWidthHz(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.formantWidthHz = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get intensity(): number {
    return this.controllerValues.intensity
  }
  // noinspection JSUnusedGlobalSymbols
  set intensity(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.intensity = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get formants(): number {
    return this.controllerValues.formants
  }
  // noinspection JSUnusedGlobalSymbols
  set formants(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 1), 5)
    controllerValues.formants = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get vowel(): number {
    return this.controllerValues.vowel
  }
  // noinspection JSUnusedGlobalSymbols
  set vowel(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.vowel = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get voiceType(): VoiceType {
    return this.controllerValues.voiceType
  }
  // noinspection JSUnusedGlobalSymbols
  set voiceType(newValue: VoiceType) {
    const { controllerValues } = this
    controllerValues.voiceType = newValue
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
}
