import {HardwareRequirement} from "./hardware-requirement";
import {GameCreation} from "./game-creation";
import {GamePlatform} from "./game-platform";

export class Game {

  // @ts-ignore
  id: number;

  // @ts-ignore
  gameName: string;

  // @ts-ignore
  gamePremiere: Date;

  // @ts-ignore
  gamePrice: number;

  // @ts-ignore
  hardwareRequirements: HardwareRequirement[];

  // @ts-ignore
  gamePlatform: GamePlatform;

  // @ts-ignore
  gameCreations: GameCreation[];

  // @ts-ignore
  imageUrl: string;

}
