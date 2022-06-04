import {Game} from "./game";

export class GamePlatform {

  private _platformId: number;
  private _platformName: string;
  private _platformProducer: string;
  private _platformPremiere: Date;
  private _platformPrice: number;
  private _games: Game[];

  constructor() {
    this._platformId = 0;
    this._platformName = '';
    this._platformProducer = '';
    this._platformPremiere = new Date();
    this._platformPrice = 0;
    this._games = [];
  }


  get platformId(): number {
    return this._platformId;
  }

  set platformId(value: number) {
    this._platformId = value;
  }

  get platformName(): string {
    return this._platformName;
  }

  set platformName(value: string) {
    this._platformName = value;
  }

  get platformProducer(): string {
    return this._platformProducer;
  }

  set platformProducer(value: string) {
    this._platformProducer = value;
  }

  get platformPremiere(): Date {
    return this._platformPremiere;
  }

  set platformPremiere(value: Date) {
    this._platformPremiere = value;
  }

  get platformPrice(): number {
    return this._platformPrice;
  }

  set platformPrice(value: number) {
    this._platformPrice = value;
  }

  get games(): Game[] {
    return this._games;
  }

  set games(value: Game[]) {
    this._games = value;
  }
}
