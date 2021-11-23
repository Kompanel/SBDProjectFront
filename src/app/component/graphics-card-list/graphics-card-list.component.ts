import { Component, OnInit } from '@angular/core';
import {Processor} from "../../model/processor";
import {ProcessorService} from "../../service/processor.service";
import {GraphicsCard} from "../../model/graphics-card";
import {GraphicsCardService} from "../../service/graphics-card.service";

@Component({
  selector: 'app-graphics-card-list',
  templateUrl: './graphics-card-list.component.html',
  styleUrls: ['./graphics-card-list.component.css']
})
export class GraphicsCardListComponent implements OnInit {

  graphicsCards: GraphicsCard[] = [];

  constructor(private graphicsCardService: GraphicsCardService) { }

  ngOnInit(): void {
    this.listGraphicCard();
  }

  listGraphicCard(){
    this.graphicsCardService.getGraphicsCardsList().subscribe(this.processResult());
  }

  processResult() {
    // @ts-ignore
    return data => {
      this.graphicsCards = data;
    }
  }

}
