/**
 * -- DO NOT EDIT THIS FILE DIRECTLY --
 *
 * This file was auto-generated by genrv.
 */
import { MidiMap, ControllerMidiMap, ControllerMidiMaps } from "../controllerMidiMap"
import { ModuleBase } from "./moduleBase"
import {
  ControllerValues,
  Controllers,
  ModuleType,
  OptionValues,
  Options,
} from "./moduleType"
import { FilterBehavior } from "./filterBehavior"
export namespace Filter {
  export const enum Type {
    // noinspection JSUnusedGlobalSymbols
    Lp = 0,
    Hp = 1,
    Bp = 2,
    Notch = 3,
  }
  export const enum Mode {
    // noinspection JSUnusedGlobalSymbols
    Hq = 0,
    HqMono = 1,
    Lq = 2,
    LqMono = 3,
  }
  export const enum RollOff {
    // noinspection JSUnusedGlobalSymbols
    Db_12 = 0,
    Db_24 = 1,
    Db_36 = 2,
    Db_48 = 3,
  }
  export const enum LfoFreqUnit {
    // noinspection JSUnusedGlobalSymbols
    Hz_0_02 = 0,
    Ms = 1,
    Hz = 2,
    Tick = 3,
    Line = 4,
    Line_2 = 5,
    Line_3 = 6,
  }
  export const enum LfoWaveform {
    // noinspection JSUnusedGlobalSymbols
    Sin = 0,
    Saw = 1,
    Saw2 = 2,
    Square = 3,
    Random = 4,
  }
  interface FilterControllerValues extends ControllerValues {
    volume: number
    freq: number
    resonance: number
    type: Type
    response: number
    mode: Mode
    impulse: number
    mix: number
    lfoFreq: number
    lfoAmp: number
    setLfoPhase: number
    exponentialFreq: boolean
    rollOff: RollOff
    lfoFreqUnit: LfoFreqUnit
    lfoWaveform: LfoWaveform
  }
  class FilterControllers implements Controllers {
    constructor(readonly controllerValues: FilterControllerValues) {}
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
    get freq(): number {
      return this.controllerValues.freq
    }
    // noinspection JSUnusedGlobalSymbols
    set freq(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 14000)
      controllerValues.freq = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get resonance(): number {
      return this.controllerValues.resonance
    }
    // noinspection JSUnusedGlobalSymbols
    set resonance(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 1530)
      controllerValues.resonance = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get type(): Type {
      return this.controllerValues.type
    }
    // noinspection JSUnusedGlobalSymbols
    set type(newValue: Type) {
      const { controllerValues } = this
      controllerValues.type = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get response(): number {
      return this.controllerValues.response
    }
    // noinspection JSUnusedGlobalSymbols
    set response(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.response = newValue
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
    get impulse(): number {
      return this.controllerValues.impulse
    }
    // noinspection JSUnusedGlobalSymbols
    set impulse(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 14000)
      controllerValues.impulse = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get mix(): number {
      return this.controllerValues.mix
    }
    // noinspection JSUnusedGlobalSymbols
    set mix(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.mix = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get lfoFreq(): number {
      return this.controllerValues.lfoFreq
    }
    // noinspection JSUnusedGlobalSymbols
    set lfoFreq(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 1024)
      controllerValues.lfoFreq = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get lfoAmp(): number {
      return this.controllerValues.lfoAmp
    }
    // noinspection JSUnusedGlobalSymbols
    set lfoAmp(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.lfoAmp = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get setLfoPhase(): number {
      return this.controllerValues.setLfoPhase
    }
    // noinspection JSUnusedGlobalSymbols
    set setLfoPhase(newValue: number) {
      const { controllerValues } = this
      newValue = Math.min(Math.max(newValue, 0), 256)
      controllerValues.setLfoPhase = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get exponentialFreq(): boolean {
      return this.controllerValues.exponentialFreq
    }
    // noinspection JSUnusedGlobalSymbols
    set exponentialFreq(newValue: boolean) {
      const { controllerValues } = this
      controllerValues.exponentialFreq = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get rollOff(): RollOff {
      return this.controllerValues.rollOff
    }
    // noinspection JSUnusedGlobalSymbols
    set rollOff(newValue: RollOff) {
      const { controllerValues } = this
      controllerValues.rollOff = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get lfoFreqUnit(): LfoFreqUnit {
      return this.controllerValues.lfoFreqUnit
    }
    // noinspection JSUnusedGlobalSymbols
    set lfoFreqUnit(newValue: LfoFreqUnit) {
      const { controllerValues } = this
      controllerValues.lfoFreqUnit = newValue
    }
    // noinspection JSUnusedGlobalSymbols
    get lfoWaveform(): LfoWaveform {
      return this.controllerValues.lfoWaveform
    }
    // noinspection JSUnusedGlobalSymbols
    set lfoWaveform(newValue: LfoWaveform) {
      const { controllerValues } = this
      controllerValues.lfoWaveform = newValue
    }
  }
  interface FilterControllerMidiMaps extends ControllerMidiMaps {
    volume: ControllerMidiMap
    freq: ControllerMidiMap
    resonance: ControllerMidiMap
    type: ControllerMidiMap
    response: ControllerMidiMap
    mode: ControllerMidiMap
    impulse: ControllerMidiMap
    mix: ControllerMidiMap
    lfoFreq: ControllerMidiMap
    lfoAmp: ControllerMidiMap
    setLfoPhase: ControllerMidiMap
    exponentialFreq: ControllerMidiMap
    rollOff: ControllerMidiMap
    lfoFreqUnit: ControllerMidiMap
    lfoWaveform: ControllerMidiMap
  }
  interface FilterOptionValues extends OptionValues {}
  class FilterOptions implements Options {
    constructor(readonly optionValues: FilterOptionValues) {}
  }
  export class Module extends ModuleBase implements ModuleType {
    name = "Filter"
    flags = 0
    readonly typeName = "Filter"
    readonly controllerSetters = [
      (val: number) => {
        this.controllerValues.volume = val
      },
      (val: number) => {
        this.controllerValues.freq = val
      },
      (val: number) => {
        this.controllerValues.resonance = val
      },
      (val: number) => {
        this.controllerValues.type = val
      },
      (val: number) => {
        this.controllerValues.response = val
      },
      (val: number) => {
        this.controllerValues.mode = val
      },
      (val: number) => {
        this.controllerValues.impulse = val
      },
      (val: number) => {
        this.controllerValues.mix = val
      },
      (val: number) => {
        this.controllerValues.lfoFreq = val
      },
      (val: number) => {
        this.controllerValues.lfoAmp = val
      },
      (val: number) => {
        this.controllerValues.setLfoPhase = val
      },
      (val: number) => {
        this.controllerValues.exponentialFreq = Boolean(val)
      },
      (val: number) => {
        this.controllerValues.rollOff = val
      },
      (val: number) => {
        this.controllerValues.lfoFreqUnit = val
      },
      (val: number) => {
        this.controllerValues.lfoWaveform = val
      },
    ]
    readonly controllerValues: FilterControllerValues = {
      volume: 256,
      freq: 14000,
      resonance: 0,
      type: Type.Lp,
      response: 8,
      mode: Mode.Hq,
      impulse: 0,
      mix: 256,
      lfoFreq: 8,
      lfoAmp: 0,
      setLfoPhase: 0,
      exponentialFreq: false,
      rollOff: RollOff.Db_12,
      lfoFreqUnit: LfoFreqUnit.Hz_0_02,
      lfoWaveform: LfoWaveform.Sin,
    }
    readonly controllers: FilterControllers = new FilterControllers(
      this.controllerValues
    )
    readonly c = this.controllers
    readonly midiMaps: FilterControllerMidiMaps = {
      volume: new ControllerMidiMap(),
      freq: new ControllerMidiMap(),
      resonance: new ControllerMidiMap(),
      type: new ControllerMidiMap(),
      response: new ControllerMidiMap(),
      mode: new ControllerMidiMap(),
      impulse: new ControllerMidiMap(),
      mix: new ControllerMidiMap(),
      lfoFreq: new ControllerMidiMap(),
      lfoAmp: new ControllerMidiMap(),
      setLfoPhase: new ControllerMidiMap(),
      exponentialFreq: new ControllerMidiMap(),
      rollOff: new ControllerMidiMap(),
      lfoFreqUnit: new ControllerMidiMap(),
      lfoWaveform: new ControllerMidiMap(),
    }
    readonly optionValues: FilterOptionValues = {}
    readonly options: FilterOptions = new FilterOptions(this.optionValues)
    readonly o = this.options
    behavior?: FilterBehavior
    constructor() {
      super()
      this.behavior = new FilterBehavior(this)
    }
    *rawControllerValues(): Generator<number> {
      const { controllerValues: cv } = this
      yield cv.volume
      yield cv.freq
      yield cv.resonance
      yield cv.type
      yield cv.response
      yield cv.mode
      yield cv.impulse
      yield cv.mix
      yield cv.lfoFreq
      yield cv.lfoAmp
      yield cv.setLfoPhase
      yield Number(cv.exponentialFreq)
      yield cv.rollOff
      yield cv.lfoFreqUnit
      yield cv.lfoWaveform
    }
    setMidiMaps(midiMaps: MidiMap[]) {
      this.midiMaps.volume = midiMaps[0]
      this.midiMaps.freq = midiMaps[1]
      this.midiMaps.resonance = midiMaps[2]
      this.midiMaps.type = midiMaps[3]
      this.midiMaps.response = midiMaps[4]
      this.midiMaps.mode = midiMaps[5]
      this.midiMaps.impulse = midiMaps[6]
      this.midiMaps.mix = midiMaps[7]
      this.midiMaps.lfoFreq = midiMaps[8]
      this.midiMaps.lfoAmp = midiMaps[9]
      this.midiMaps.setLfoPhase = midiMaps[10]
      this.midiMaps.exponentialFreq = midiMaps[11]
      this.midiMaps.rollOff = midiMaps[12]
      this.midiMaps.lfoFreqUnit = midiMaps[13]
      this.midiMaps.lfoWaveform = midiMaps[14]
    }
    midiMapsArray(): MidiMap[] {
      const a: MidiMap[] = []
      a.push(this.midiMaps.volume)
      a.push(this.midiMaps.freq)
      a.push(this.midiMaps.resonance)
      a.push(this.midiMaps.type)
      a.push(this.midiMaps.response)
      a.push(this.midiMaps.mode)
      a.push(this.midiMaps.impulse)
      a.push(this.midiMaps.mix)
      a.push(this.midiMaps.lfoFreq)
      a.push(this.midiMaps.lfoAmp)
      a.push(this.midiMaps.setLfoPhase)
      a.push(this.midiMaps.exponentialFreq)
      a.push(this.midiMaps.rollOff)
      a.push(this.midiMaps.lfoFreqUnit)
      a.push(this.midiMaps.lfoWaveform)
      return a
    }
  }
}
