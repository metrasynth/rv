/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { Controllers, ModuleType } from "./moduleType"
import { OutputControllerValues } from "./outputControllerValues"
export class OutputBaseControllers implements Controllers {
  constructor(
    readonly module: ModuleType,
    readonly controllerValues: OutputControllerValues
  ) {}
}