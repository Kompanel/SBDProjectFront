
export class GraphicsCard {

  private _cardId: number;
  private _cardModel: string;
  private _memory: number;
  private _memoryType: string;
  private _powerConsumption: number;
  private _premiereDate: Date;
  private _cardPrice: number;
  private _benchmarkValue: number;
  private _imageUrl: string;
  private _cardProducer: string;

  constructor() {
    this._cardId = 0;
    this._cardModel = '';
    this._memoryType = '';
    this._memory = 0;
    this._powerConsumption = 0;
    this._premiereDate = new Date();
    this._cardPrice = 0;
    this._benchmarkValue = 0;
    this._imageUrl = '';
    this._cardProducer = '';
  }


  get cardId(): number {
    return this._cardId;
  }

  set cardId(value: number) {
    this._cardId = value;
  }

  get cardModel(): string {
    return this._cardModel;
  }

  set cardModel(value: string) {
    this._cardModel = value;
  }

  get memory(): number {
    return this._memory;
  }

  set memory(value: number) {
    this._memory = value;
  }

  get memoryType(): string {
    return this._memoryType;
  }

  set memoryType(value: string) {
    this._memoryType = value;
  }

  get powerConsumption(): number {
    return this._powerConsumption;
  }

  set powerConsumption(value: number) {
    this._powerConsumption = value;
  }

  get premiereDate(): Date {
    return this._premiereDate;
  }

  set premiereDate(value: Date) {
    this._premiereDate = value;
  }

  get cardPrice(): number {
    return this._cardPrice;
  }

  set cardPrice(value: number) {
    this._cardPrice = value;
  }

  get benchmarkValue(): number {
    return this._benchmarkValue;
  }

  set benchmarkValue(value: number) {
    this._benchmarkValue = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get cardProducer(): string {
    return this._cardProducer;
  }

  set cardProducer(value: string) {
    this._cardProducer = value;
  }
}
