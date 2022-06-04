export class ProcessorDto {
  processorModel: string;
  producer: string;
  lithography: number;
  cores: number;
  threads: number;
  clockFrequency: number;
  cache: number;
  processorPremiere: Date;
  integratedGraphics: boolean;
  unlockedMultiplier: boolean;
  powerConsumption: number;
  processorPrice: number;
  benchmarkValue: number;
  imageUrl: string;

  constructor() {
    this.processorModel = '';
    this.producer = '';
    this.cores  = 0;
    this.lithography = 0;
    this.threads = 0;
    this.clockFrequency = 0;
    this.cache = 0;
    this.processorPremiere = new Date();
    this.integratedGraphics  = true;
    this.unlockedMultiplier = true;
    this.powerConsumption = 0;
    this.processorPrice = 0;
    this.benchmarkValue = 0;
    this.imageUrl = '';
  }

}
