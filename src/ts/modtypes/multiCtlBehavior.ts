import { ModuleSpecificBehavior } from "./moduleSpecificBehavior"
import { Chunk } from "../chunks/chunk"
import { ModuleDataChunk, ModuleDataChunks } from "../moduleDataChunk"

interface Mapping {
  min: number
  max: number
  ctl: number
}

export class MultiCtlBehavior extends ModuleSpecificBehavior {
  readonly mappings: Mapping[] = defaultMappings()
  curve = Uint16Array.from(defaultCurve)

  chnk(): number {
    return 2
  }

  processDataChunks(dataChunks: ModuleDataChunks) {
    for (const dataChunk of dataChunks) {
      switch (dataChunk.chnm) {
        case 0:
          this.processMappingsDataChunk(dataChunk)
          continue
        case 1:
          this.processCurveDataChunk(dataChunk)
      }
    }
  }

  private processMappingsDataChunk(dataChunk: ModuleDataChunk) {
    const { chdt } = dataChunk
    if (chdt) {
      const rawValues = new Uint32Array(chdt.buffer, chdt.byteOffset)
      for (let i = 0; i < 16; ++i) {
        const mapping = this.mappings[i]
        mapping.min = rawValues[i * 8]
        mapping.max = rawValues[i * 8 + 1]
        mapping.ctl = rawValues[i * 8 + 2]
      }
    }
  }

  private processCurveDataChunk(dataChunk: ModuleDataChunk) {
    const { chdt } = dataChunk
    if (chdt) {
      this.curve = new Uint16Array(chdt.buffer, chdt.byteOffset)
    }
  }

  *typeSpecificChunks(): Generator<Chunk> {
    const rawValues = new Uint32Array(16 * 8)
    for (let i = 0; i < 16; ++i) {
      const mapping = this.mappings[i]
      rawValues[i * 8] = mapping.min
      rawValues[i * 8 + 1] = mapping.max
      rawValues[i * 8 + 2] = mapping.ctl
    }

    yield { name: "CHNM", type: "uint32", value: 0 }
    yield {
      name: "CHDT",
      type: "bytes",
      value: new Uint8Array(
        rawValues.buffer,
        rawValues.byteOffset,
        rawValues.byteLength
      ),
    }

    yield { name: "CHNM", type: "uint32", value: 1 }
    yield {
      name: "CHDT",
      type: "bytes",
      value: new Uint8Array(
        this.curve.buffer,
        this.curve.byteOffset,
        this.curve.byteLength
      ),
    }
  }
}

function defaultMappings(): Mapping[] {
  return [
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
    { min: 0, max: 0x8000, ctl: 0 },
  ]
}

// prettier-ignore
const defaultCurve = [
  0x0000, 0x0080, 0x0100, 0x0180, 0x0200, 0x0280, 0x0300, 0x0380, 0x0400, 0x0480, 0x0500, 0x0580, 0x0600, 0x0680, 0x0700, 0x0780,
  0x0800, 0x0880, 0x0900, 0x0980, 0x0a00, 0x0a80, 0x0b00, 0x0b80, 0x0c00, 0x0c80, 0x0d00, 0x0d80, 0x0e00, 0x0e80, 0x0f00, 0x0f80,
  0x1000, 0x1080, 0x1100, 0x1180, 0x1200, 0x1280, 0x1300, 0x1380, 0x1400, 0x1480, 0x1500, 0x1580, 0x1600, 0x1680, 0x1700, 0x1780,
  0x1800, 0x1880, 0x1900, 0x1980, 0x1a00, 0x1a80, 0x1b00, 0x1b80, 0x1c00, 0x1c80, 0x1d00, 0x1d80, 0x1e00, 0x1e80, 0x1f00, 0x1f80,
  0x2000, 0x2080, 0x2100, 0x2180, 0x2200, 0x2280, 0x2300, 0x2380, 0x2400, 0x2480, 0x2500, 0x2580, 0x2600, 0x2680, 0x2700, 0x2780,
  0x2800, 0x2880, 0x2900, 0x2980, 0x2a00, 0x2a80, 0x2b00, 0x2b80, 0x2c00, 0x2c80, 0x2d00, 0x2d80, 0x2e00, 0x2e80, 0x2f00, 0x2f80,
  0x3000, 0x3080, 0x3100, 0x3180, 0x3200, 0x3280, 0x3300, 0x3380, 0x3400, 0x3480, 0x3500, 0x3580, 0x3600, 0x3680, 0x3700, 0x3780,
  0x3800, 0x3880, 0x3900, 0x3980, 0x3a00, 0x3a80, 0x3b00, 0x3b80, 0x3c00, 0x3c80, 0x3d00, 0x3d80, 0x3e00, 0x3e80, 0x3f00, 0x3f80,
  0x4000, 0x4080, 0x4100, 0x4180, 0x4200, 0x4280, 0x4300, 0x4380, 0x4400, 0x4480, 0x4500, 0x4580, 0x4600, 0x4680, 0x4700, 0x4780,
  0x4800, 0x4880, 0x4900, 0x4980, 0x4a00, 0x4a80, 0x4b00, 0x4b80, 0x4c00, 0x4c80, 0x4d00, 0x4d80, 0x4e00, 0x4e80, 0x4f00, 0x4f80,
  0x5000, 0x5080, 0x5100, 0x5180, 0x5200, 0x5280, 0x5300, 0x5380, 0x5400, 0x5480, 0x5500, 0x5580, 0x5600, 0x5680, 0x5700, 0x5780,
  0x5800, 0x5880, 0x5900, 0x5980, 0x5a00, 0x5a80, 0x5b00, 0x5b80, 0x5c00, 0x5c80, 0x5d00, 0x5d80, 0x5e00, 0x5e80, 0x5f00, 0x5f80,
  0x6000, 0x6080, 0x6100, 0x6180, 0x6200, 0x6280, 0x6300, 0x6380, 0x6400, 0x6480, 0x6500, 0x6580, 0x6600, 0x6680, 0x6700, 0x6780,
  0x6800, 0x6880, 0x6900, 0x6980, 0x6a00, 0x6a80, 0x6b00, 0x6b80, 0x6c00, 0x6c80, 0x6d00, 0x6d80, 0x6e00, 0x6e80, 0x6f00, 0x6f80,
  0x7000, 0x7080, 0x7100, 0x7180, 0x7200, 0x7280, 0x7300, 0x7380, 0x7400, 0x7480, 0x7500, 0x7580, 0x7600, 0x7680, 0x7700, 0x7780,
  0x7800, 0x7880, 0x7900, 0x7980, 0x7a00, 0x7a80, 0x7b00, 0x7b80, 0x7c00, 0x7c80, 0x7d00, 0x7d80, 0x7e00, 0x7e80, 0x7f00, 0x7f80,
  0x8000
]
