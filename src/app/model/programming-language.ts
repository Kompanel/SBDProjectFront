import {Game} from "./game";
import {Engine} from "./engine";

export class ProgrammingLanguage {

  private _id: number;
  private _languageName: string;
  private _languageCreator: string;
  private _languageVersion: string;
  private _engines: Engine[];

  constructor() {
    this._id = 0;
    this._languageName = '';
    this._languageCreator = '';
    this._languageVersion = '';
    this._engines = [];
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get languageName(): string {
    return this._languageName;
  }

  set languageName(value: string) {
    this._languageName = value;
  }

  get languageCreator(): string {
    return this._languageCreator;
  }

  set languageCreator(value: string) {
    this._languageCreator = value;
  }

  get languageVersion(): string {
    return this._languageVersion;
  }

  set languageVersion(value: string) {
    this._languageVersion = value;
  }

  get engines(): Engine[] {
    return this._engines;
  }

  set engines(value: Engine[]) {
    this._engines = value;
  }
}
