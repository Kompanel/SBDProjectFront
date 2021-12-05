import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProcessorService} from "../../service/processor.service";
import {ProcessorDto} from "../../model/processor-dto";

@Component({
  selector: 'app-edit-single-processor',
  templateUrl: './edit-single-processor.component.html',
  styleUrls: ['./edit-single-processor.component.css']
})
export class EditSingleProcessorComponent implements OnInit {

  // @ts-ignore
  editProcessorForm: FormGroup;
  processorEditId: number = 0;

  constructor(private route: ActivatedRoute,
              private processorService: ProcessorService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.processorEditId = Number(this.route.snapshot.paramMap.get('id'));
    this.editProcessorForm = this.formBuilder.group({
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
    let processor = new ProcessorDto();
    processor.processorModel = this.editProcessorForm.get('processorModel')?.value;
    processor.producer = this.editProcessorForm.get('producer')?.value;
    processor.processorModel = this.editProcessorForm.get('processorModel')?.value;
    processor.lithography = this.editProcessorForm.get('lithography')?.value;
    processor.cores = this.editProcessorForm.get('cores')?.value;
    processor.threads = this.editProcessorForm.get('threads')?.value;
    processor.cache = this.editProcessorForm.get('cache')?.value;
    processor.clockFrequency = this.editProcessorForm.get('clockFrequency')?.value;
    processor.processorPremiere = this.editProcessorForm.get('processorPremiere')?.value;
    processor.integratedGraphics = this.editProcessorForm.get('integratedGraphics')?.value == true;
    processor.unlockedMultiplier = this.editProcessorForm.get('unlockedMultiplier')?.value == true;
    processor.powerConsumption = this.editProcessorForm.get('powerConsumption')?.value;
    processor.processorPrice = this.editProcessorForm.get('processorPrice')?.value;
    processor.benchmarkValue = this.editProcessorForm.get('benchmarkValue')?.value;
    processor.imageUrl = this.editProcessorForm.get('imageUrl')?.value;

    this.processorService.editProcessor(this.processorEditId, processor);
    this.router.navigateByUrl("/admin");
  }

}
