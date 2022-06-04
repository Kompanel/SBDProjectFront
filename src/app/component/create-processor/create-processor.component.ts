import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProcessorService} from "../../service/processor.service";
import {ProcessorDto} from "../../model/processor-dto";
import {Router} from "@angular/router";
import {Processor} from "../../model/processor";

@Component({
  selector: 'app-create-processor',
  templateUrl: './create-processor.component.html',
  styleUrls: ['./create-processor.component.css']
})
export class CreateProcessorComponent implements OnInit {

  newProcessorFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private processorService: ProcessorService,
              private router: Router) { }

  ngOnInit(): void {
    this.newProcessorFormGroup = this.formBuilder.group({
      processorModel: ['', Validators.required],
      producer: ['', Validators.required],
      lithography: ['', Validators.required],
      cores: ['', Validators.required],
      threads: ['', Validators.required],
      clockFrequency: ['', Validators.required],
      cache: ['', Validators.required],
      processorPremiere: ['', Validators.required],
      integratedGraphics: ['', Validators.required],
      unlockedMultiplier: ['', Validators.required],
      powerConsumption: ['', Validators.required],
      processorPrice: ['', Validators.required],
      benchmarkValue: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  onSubmit() {
    let processor: ProcessorDto = new ProcessorDto();
    processor.processorModel = this.newProcessorFormGroup.get('processorModel')?.value;
    processor.producer = this.newProcessorFormGroup.get('producer')?.value;
    processor.processorModel = this.newProcessorFormGroup.get('processorModel')?.value;
    processor.lithography = this.newProcessorFormGroup.get('lithography')?.value;
    processor.cores = this.newProcessorFormGroup.get('cores')?.value;
    processor.threads = this.newProcessorFormGroup.get('threads')?.value;
    processor.cache = this.newProcessorFormGroup.get('cache')?.value;
    processor.clockFrequency = this.newProcessorFormGroup.get('clockFrequency')?.value;
    processor.processorPremiere = this.newProcessorFormGroup.get('processorPremiere')?.value;
    processor.integratedGraphics = this.newProcessorFormGroup.get('integratedGraphics')?.value == true;
    processor.unlockedMultiplier = this.newProcessorFormGroup.get('unlockedMultiplier')?.value == true;
    processor.powerConsumption = this.newProcessorFormGroup.get('powerConsumption')?.value;
    processor.processorPrice = this.newProcessorFormGroup.get('processorPrice')?.value;
    processor.benchmarkValue = this.newProcessorFormGroup.get('benchmarkValue')?.value;
    processor.imageUrl = this.newProcessorFormGroup.get('imageUrl')?.value;

    this.processorService.addProcessor(processor).subscribe();
    this.router.navigateByUrl("/admin");
  }

}
