import { Component, OnInit } from '@angular/core';
import {Processor} from "../../model/processor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProcessorService} from "../../service/processor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-processor',
  templateUrl: './edit-processor.component.html',
  styleUrls: ['./edit-processor.component.css']
})
export class EditProcessorComponent implements OnInit {

  processors: Processor[] = [];
  // @ts-ignore
  processorToEdit: Processor;
  // @ts-ignore
  editProcessorForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private processorService: ProcessorService,
              private router: Router) { }

  ngOnInit(): void {
    this.processorService.getProcessorList().subscribe(this.processorList());
    this.editProcessorForm = this.formBuilder.group({
      processor: ['', Validators.required]
    })
  }

  onSubmit() {
    this.processorToEdit = this.editProcessorForm.get('processor')?.value;
    this.router.navigateByUrl(`admin/edit-processor/${this.processorToEdit.processorId}`)
  }

  processorList() {
    //@ts-ignore
    return data => {
      this.processors = data;
    }
  }

}
