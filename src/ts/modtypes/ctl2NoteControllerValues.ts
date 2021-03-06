/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType"
// @ts-ignore
// noinspection ES6UnusedImports
import { NoteOn } from "./ctl2NoteEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { NoteOff } from "./ctl2NoteEnums"
export interface Ctl2NoteControllerValues extends ControllerValues {
  pitch: number
  firstNote: number
  rangeSemitones: number
  transpose: number
  finetune: number
  velocity: number
  state: boolean
  noteOn: NoteOn
  noteOff: NoteOff
  recordNotes: boolean
}
