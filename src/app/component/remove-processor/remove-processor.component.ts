import {Component, OnInit} from '@angular/core';
import {Processor} from "../../model/processor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProcessorService} from "../../service/processor.service";

@Component({
  selector: 'app-remove-processor',
  templateUrl: './remove-processor.component.html',
  styleUrls: ['./remove-processor.component.css']
})
export class RemoveProcessorComponent implements OnInit {

  processors: Processor[] = [];
  // @ts-ignore
  processorToRemove: Processor;
  // @ts-ignore
  removeProcessorFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private processorService: ProcessorService) {
  }

  ngOnInit(): void {
    this.processorService.getProcessorList().subscribe(this.processorList());
    this.removeProcessorFormGroup = this.formBuilder.group({
      processor: ['', Validators.required]
    });
  }

  onSubmit(){
    this.processorToRemove = this.removeProcessorFormGroup.get('processor')?.value;
    this.processorService.removeProcessor(this.processorToRemove.processorId);
  }

  processorList() {
    // @ts-ignore
    return data => {
      this.processors = data;
    }
  }

}
