import {GameCreation} from "./game-creation";
import {ProgrammingLanguage} from "./programming-language";

export class Engine {

  private _id: number;
  private _engineName: string;
  private _engineVersion: string;
  private _enginePremiere: Date;
  private _programmingLanguage: ProgrammingLanguage;
  private _gameCreations: GameCreation[];


  constructor() {
    this._id = 0;
    this._engineName = '';
    this._engineVersion = '';
    this._enginePremiere = new Date();
    this._programmingLanguage = new ProgrammingLanguage();
    this._gameCreations = [];
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get engineName(): string {
    return this._engineName;
  }

  set engineName(value: string) {
    this._engineName = value;
  }

  get engineVersion(): string {
    return this._engineVersion;
  }

  set engineVersion(value: string) {
    this._engineVersion = value;
  }

  get enginePremiere(): Date {
    return this._enginePremiere;
  }

  set enginePremiere(value: Date) {
    this._enginePremiere = value;
  }

  get programmingLanguage(): ProgrammingLanguage {
    return this._programmingLanguage;
  }

  set programmingLanguage(value: ProgrammingLanguage) {
    this._programmingLanguage = value;
  }

  get gameCreations(): GameCreation[] {
    return this._gameCreations;
  }

  set gameCreations(value: GameCreation[]) {
    this._gameCreations = value;
  }
}
