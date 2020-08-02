/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers } from "./moduleType"
import { VibratoControllerValues } from "./vibratoControllerValues"
// @ts-ignore
// noinspection ES6UnusedImports
import { Channels } from "./vibratoEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { FrequencyUnit } from "./vibratoEnums"
export class VibratoBaseControllers implements Controllers {
  constructor(readonly controllerValues: VibratoControllerValues) {}
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
  get amplitude(): number {
    return this.controllerValues.amplitude
  }
  // noinspection JSUnusedGlobalSymbols
  set amplitude(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.amplitude = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get freq(): number {
    return this.controllerValues.freq
  }
  // noinspection JSUnusedGlobalSymbols
  set freq(newValue: number) {
    const { controllerValues } = this
    switch (this.controllerValues.frequencyUnit) {
      case FrequencyUnit.Hz_64:
        newValue = Math.min(Math.max(newValue, 1), 2048)
        break
      case FrequencyUnit.Ms:
        newValue = Math.min(Math.max(newValue, 1), 4000)
        break
      case FrequencyUnit.Hz:
        newValue = Math.min(Math.max(newValue, 1), 16384)
        break
      case FrequencyUnit.Tick:
        newValue = Math.min(Math.max(newValue, 1), 2048)
        break
      case FrequencyUnit.Line:
        newValue = Math.min(Math.max(newValue, 1), 2048)
        break
      case FrequencyUnit.Line_2:
        newValue = Math.min(Math.max(newValue, 1), 2048)
        break
      case FrequencyUnit.Line_3:
        newValue = Math.min(Math.max(newValue, 1), 2048)
        break
    }
    controllerValues.freq = newValue
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
  get setPhase(): number {
    return this.controllerValues.setPhase
  }
  // noinspection JSUnusedGlobalSymbols
  set setPhase(newValue: number) {
    const { controllerValues } = this
    newValue = Math.min(Math.max(newValue, 0), 256)
    controllerValues.setPhase = newValue
  }
  // noinspection JSUnusedGlobalSymbols
  get frequencyUnit(): FrequencyUnit {
    return this.controllerValues.frequencyUnit
  }
  // noinspection JSUnusedGlobalSymbols
  set frequencyUnit(newValue: FrequencyUnit) {
    const { controllerValues } = this
    controllerValues.frequencyUnit = newValue
    this.freq = this.freq
  }
  // noinspection JSUnusedGlobalSymbols
  get exponentialAmplitude(): boolean {
    return this.controllerValues.exponentialAmplitude
  }
  // noinspection JSUnusedGlobalSymbols
  set exponentialAmplitude(newValue: boolean) {
    const { controllerValues } = this
    controllerValues.exponentialAmplitude = newValue
  }
}
