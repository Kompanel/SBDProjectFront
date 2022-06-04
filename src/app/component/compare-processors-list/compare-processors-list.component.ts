import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProcessorService} from "../../service/processor.service";
import {Processor} from "../../model/processor";
import {Router} from "@angular/router";

@Component({
  selector: 'app-compare-processors-list',
  templateUrl: './compare-processors-list.component.html',
  styleUrls: ['./compare-processors-list.component.css']
})
export class CompareProcessorsListComponent implements OnInit {

  processors: Processor[] = [];
  compareProcessorFormGroup!: FormGroup;
  processor1: Processor = new Processor();
  processor2: Processor = new Processor();

  constructor(private formBuilder: FormBuilder,
              private processorService: ProcessorService,
              private router: Router) { }

  ngOnInit(): void {
    this.processorService.getProcessorList().subscribe(data =>{
      this.processors = data.content.processors;
    });
    this.compareProcessorFormGroup = this.formBuilder.group({
      processor1: ['', Validators.required],
      processor2: ['', Validators.required]
    })
  }

  onSubmit() {
    this.processor1 = this.compareProcessorFormGroup.get('processor1')?.value;
    this.processor2 = this.compareProcessorFormGroup.get('processor2')?.value;
    this.router.navigateByUrl(`/compare-processors/${this.processor1.processorId}/${this.processor2.processorId}`);
  }

}
