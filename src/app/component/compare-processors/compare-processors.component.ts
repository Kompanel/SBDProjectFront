import { Component, OnInit } from '@angular/core';
import {ProcessorService} from "../../service/processor.service";
import {ActivatedRoute} from "@angular/router";
import {Processor} from "../../model/processor";

@Component({
  selector: 'app-compare-processors',
  templateUrl: './compare-processors.component.html',
  styleUrls: ['./compare-processors.component.css']
})
export class CompareProcessorsComponent implements OnInit {

  processor1Id: number = 0;
  processor2Id: number = 0;

  processor1: Processor = new Processor();
  processor2: Processor = new Processor();

  constructor(private processorService: ProcessorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.processor1Id = Number(this.route.snapshot.paramMap.get('id1'));
    this.processor2Id = Number(this.route.snapshot.paramMap.get('id2'));

    this.processorService.getProcessor(this.processor1Id).subscribe(this.getProcessor1());
    this.processorService.getProcessor(this.processor2Id).subscribe(this.getProcessor2());

  }

  getProcessor1() {
    // @ts-ignore
    return data => {
      this.processor1 = data;
    }
  }

  getProcessor2() {
    // @ts-ignore
    return data => {
      this.processor2 = data;
    }
  }


}
