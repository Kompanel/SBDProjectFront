import {Game} from "./game";
import {HardwareRequirement} from "./hardware-requirement";

export class GraphicsCard {

  // @ts-ignore
  id: number;

  // @ts-ignore
  cardModel: string;

  // @ts-ignore
  memory: number;

  // @ts-ignore
  memoryType: string;

  // @ts-ignore
  powerConsumption: number;

  // @ts-ignore
  premiereDate: Date;

  // @ts-ignore
  cardPrice: number;

  // @ts-ignore
  benchmarkValue: number;

  // @ts-ignore
  hardwareRequirements: HardwareRequirement[];


}
