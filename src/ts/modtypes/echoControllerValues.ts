/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { ControllerValues } from "./moduleType"
// @ts-ignore
// noinspection ES6UnusedImports
import { Channels } from "./echoEnums"
// @ts-ignore
// noinspection ES6UnusedImports
import { DelayUnit } from "./echoEnums"
export interface EchoControllerValues extends ControllerValues {
  dry: number
  wet: number
  feedback: number
  delay: number
  channels: Channels
  delayUnit: DelayUnit
}
