import {Processor} from "./processor";
import {GraphicsCard} from "./graphics-card";

export class HardwareRequirement {

  private _id: number;
  private _discSpace: number;
  private _ram: number;
  private _requirementType: string;
  private _processor: Processor;
  private _graphicsCard: GraphicsCard;

  constructor() {
    this._id = 0;
    this._discSpace = 0;
    this._ram = 0;
    this._requirementType = '';
    this._processor = new Processor();
    this._graphicsCard = new GraphicsCard();
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get discSpace(): number {
    return this._discSpace;
  }

  set discSpace(value: number) {
    this._discSpace = value;
  }

  get ram(): number {
    return this._ram;
  }

  set ram(value: number) {
    this._ram = value;
  }

  get requirementType(): string {
    return this._requirementType;
  }

  set requirementType(value: string) {
    this._requirementType = value;
  }

  get processor(): Processor {
    return this._processor;
  }

  set processor(value: Processor) {
    this._processor = value;
  }

  get graphicsCard(): GraphicsCard {
    return this._graphicsCard;
  }

  set graphicsCard(value: GraphicsCard) {
    this._graphicsCard = value;
  }
}
