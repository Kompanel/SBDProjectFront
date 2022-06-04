import {Processor} from "./processor";
import {Game} from "./game";
import {Developer} from "./developer";
import {Engine} from "./engine";

export class GameCreation {

  private _id: number;
  private _budget: number;
  private _game: Game;
  private _developer: Developer;
  private _engine: Engine;

  constructor() {
    this._id = 0;
    this._budget = 0;
    this._developer = new Developer();
    this._game = new Game();
    this._engine = new Engine();
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get budget(): number {
    return this._budget;
  }

  set budget(value: number) {
    this._budget = value;
  }

  get game(): Game {
    return this._game;
  }

  set game(value: Game) {
    this._game = value;
  }

  get developer(): Developer {
    return this._developer;
  }

  set developer(value: Developer) {
    this._developer = value;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    this._engine = value;
  }
}
