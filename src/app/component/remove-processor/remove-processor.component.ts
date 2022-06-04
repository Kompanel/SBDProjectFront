import {Component, OnInit} from '@angular/core';
import {Processor} from "../../model/processor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProcessorService} from "../../service/processor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-remove-processor',
  templateUrl: './remove-processor.component.html',
  styleUrls: ['./remove-processor.component.css']
})
export class RemoveProcessorComponent implements OnInit {

  processors: Processor[] = [];
  processorToRemove: Processor = new Processor();
  removeProcessorFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private processorService: ProcessorService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.processorService.getProcessorList().subscribe(data =>{
      this.processors = data.content.processors
    });
    this.removeProcessorFormGroup = this.formBuilder.group({
      processor: ['', Validators.required]
    });
  }

  onSubmit(){
    this.processorToRemove = this.removeProcessorFormGroup.get('processor')?.value;
    this.processorService.removeProcessor(this.processorToRemove.processorId);
    this.router.navigateByUrl("/admin");
  }


}
