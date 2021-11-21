import { Component, OnInit } from '@angular/core';
import {Processor} from "../../model/processor";
import {ProcessorService} from "../../service/processor.service";

@Component({
  selector: 'app-processor-list',
  templateUrl: './processor-list.component.html',
  styleUrls: ['./processor-list.component.css']
})
export class ProcessorListComponent implements OnInit {

  processors: Processor[] = [];

  constructor(private processorService: ProcessorService) { }

  ngOnInit(): void {
    this.listProcessor();
  }

  listProcessor(){
    this.processorService.getProcessorList().subscribe(this.processResult());
  }

  processResult() {
    // @ts-ignore
    return data => {
      this.processors = data;
    }
  }

}
