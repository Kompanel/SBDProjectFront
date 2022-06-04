import {GameCreation} from "./game-creation";

export class Developer {

  private _id: number;
  private _developerName: string;
  private _hqLocalization: string;
  private _employeeNumber: number;
  private _gameCreations: GameCreation[];

  constructor() {
    this._id = 0;
    this._developerName = '';
    this._hqLocalization = '';
    this._employeeNumber = 0;
    this._gameCreations = [];
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get developerName(): string {
    return this._developerName;
  }

  set developerName(value: string) {
    this._developerName = value;
  }

  get hqLocalization(): string {
    return this._hqLocalization;
  }

  set hqLocalization(value: string) {
    this._hqLocalization = value;
  }

  get employeeNumber(): number {
    return this._employeeNumber;
  }

  set employeeNumber(value: number) {
    this._employeeNumber = value;
  }

  get gameCreations(): GameCreation[] {
    return this._gameCreations;
  }

  set gameCreations(value: GameCreation[]) {
    this._gameCreations = value;
  }
}
