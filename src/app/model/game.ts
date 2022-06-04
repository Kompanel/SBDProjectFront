import {HardwareRequirement} from "./hardware-requirement";
import {GameCreation} from "./game-creation";
import {GamePlatform} from "./game-platform";

export class Game {

  private _id: number;
  private _gameName: string;
  private _gamePremiere: Date;
  private _gamePrice: number;
  private _hardwareRequirements: HardwareRequirement[];
  private _gamePlatform: GamePlatform;
  private _gameCreations: GameCreation[];
  private _imageUrl: string;

  constructor() {
    this._id = 0;
    this._gameName = '';
    this._gamePremiere = new Date();
    this._gamePrice = 0;
    this._hardwareRequirements = []
    this._gamePlatform = new GamePlatform();
    this._gameCreations = [];
    this._imageUrl = '';
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get gameName(): string {
    return this._gameName;
  }

  set gameName(value: string) {
    this._gameName = value;
  }

  get gamePremiere(): Date {
    return this._gamePremiere;
  }

  set gamePremiere(value: Date) {
    this._gamePremiere = value;
  }

  get gamePrice(): number {
    return this._gamePrice;
  }

  set gamePrice(value: number) {
    this._gamePrice = value;
  }

  get hardwareRequirements(): HardwareRequirement[] {
    return this._hardwareRequirements;
  }

  set hardwareRequirements(value: HardwareRequirement[]) {
    this._hardwareRequirements = value;
  }

  get gamePlatform(): GamePlatform {
    return this._gamePlatform;
  }

  set gamePlatform(value: GamePlatform) {
    this._gamePlatform = value;
  }

  get gameCreations(): GameCreation[] {
    return this._gameCreations;
  }

  set gameCreations(value: GameCreation[]) {
    this._gameCreations = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}
