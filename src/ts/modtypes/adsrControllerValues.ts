/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType"
// @ts-ignore
// noinspection ES6UnusedImports
import { Curve } from "./adsrEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { State } from "./adsrEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { OnNoteOn } from "./adsrEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { OnNoteOff } from "./adsrEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { Mode } from "./adsrEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { SmoothTransitions } from "./adsrEnums"
export interface AdsrControllerValues extends ControllerValues {
  volume: number
  attackMs: number
  decayMs: number
  sustainLevel: number
  releaseMs: number
  attackCurve: Curve
  decayCurve: Curve
  releaseCurve: Curve
  sustain: boolean
  sustainPedal: boolean
  state: State
  onNoteOn: OnNoteOn
  onNoteOff: OnNoteOff
  mode: Mode
  smoothTransitions: SmoothTransitions
}