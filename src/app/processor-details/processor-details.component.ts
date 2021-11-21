import { Component, OnInit } from '@angular/core';
import {Processor} from "../model/processor";
import {ProcessorService} from "../service/processor.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-processor-details',
  templateUrl: './processor-details.component.html',
  styleUrls: ['./processor-details.component.css']
})
export class ProcessorDetailsComponent implements OnInit {

  processor: Processor = new Processor();

  constructor(private processorService: ProcessorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.processorDetails());
  }

  processorDetails(){
    const processorId: number = Number(this.route.snapshot.paramMap.get('id'));

    this.processorService.getProcessor(processorId).subscribe(data => {
      this.processor = data;
    })
  }

}
