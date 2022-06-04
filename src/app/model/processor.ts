import {HardwareRequirement} from "./hardware-requirement";

export class Processor {

  private _processorId: number;
  private _processorModel: string;
  private _producer: string;
  private _lithography: number;
  private _cores: number;
  private _threads: number;
  private _clockFrequency: number;
  private _cache: number;
  private _processorPremiere: Date;
  private _integratedGraphics: boolean;
  private _unlockedMultiplier: boolean;
  private _powerConsumption: number;
  private _processorPrice: number;
  private _benchmarkValue: number;
  private _hardwareRequirements: HardwareRequirement[];
  private _imageUrl: string;

  constructor() {
    this._processorId = 0;
    this._processorModel = '';
    this._producer = '';
    this._lithography = 0;
    this._cores = 0;
    this._threads = 0;
    this._clockFrequency = 0;
    this._cache = 0;
    this._processorPremiere = new Date();
    this._integratedGraphics = true;
    this._unlockedMultiplier = true;
    this._powerConsumption = 0;
    this._processorPrice = 0;
    this._benchmarkValue = 0;
    this._hardwareRequirements = [];
    this._imageUrl = '';
  }


  get processorId(): number {
    return this._processorId;
  }

  set processorId(value: number) {
    this._processorId = value;
  }

  get processorModel(): string {
    return this._processorModel;
  }

  set processorModel(value: string) {
    this._processorModel = value;
  }

  get producer(): string {
    return this._producer;
  }

  set producer(value: string) {
    this._producer = value;
  }

  get lithography(): number {
    return this._lithography;
  }

  set lithography(value: number) {
    this._lithography = value;
  }

  get cores(): number {
    return this._cores;
  }

  set cores(value: number) {
    this._cores = value;
  }

  get threads(): number {
    return this._threads;
  }

  set threads(value: number) {
    this._threads = value;
  }

  get clockFrequency(): number {
    return this._clockFrequency;
  }

  set clockFrequency(value: number) {
    this._clockFrequency = value;
  }

  get cache(): number {
    return this._cache;
  }

  set cache(value: number) {
    this._cache = value;
  }

  get processorPremiere(): Date {
    return this._processorPremiere;
  }

  set processorPremiere(value: Date) {
    this._processorPremiere = value;
  }

  get integratedGraphics(): boolean {
    return this._integratedGraphics;
  }

  set integratedGraphics(value: boolean) {
    this._integratedGraphics = value;
  }

  get unlockedMultiplier(): boolean {
    return this._unlockedMultiplier;
  }

  set unlockedMultiplier(value: boolean) {
    this._unlockedMultiplier = value;
  }

  get powerConsumption(): number {
    return this._powerConsumption;
  }

  set powerConsumption(value: number) {
    this._powerConsumption = value;
  }

  get processorPrice(): number {
    return this._processorPrice;
  }

  set processorPrice(value: number) {
    this._processorPrice = value;
  }

  get benchmarkValue(): number {
    return this._benchmarkValue;
  }

  set benchmarkValue(value: number) {
    this._benchmarkValue = value;
  }

  get hardwareRequirements(): HardwareRequirement[] {
    return this._hardwareRequirements;
  }

  set hardwareRequirements(value: HardwareRequirement[]) {
    this._hardwareRequirements = value;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}
