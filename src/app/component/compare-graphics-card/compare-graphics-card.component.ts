import { Component, OnInit } from '@angular/core';
import {GraphicsCard} from "../../model/graphics-card";
import {GraphicsCardService} from "../../service/graphics-card.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-compare-graphics-card',
  templateUrl: './compare-graphics-card.component.html',
  styleUrls: ['./compare-graphics-card.component.css']
})
export class CompareGraphicsCardComponent implements OnInit {

  graphicsCard1Id: number = 0;
  graphicsCard2Id: number = 0;

  graphicsCard1: GraphicsCard = new GraphicsCard();
  graphicsCard2: GraphicsCard = new GraphicsCard();

  constructor(private graphicsCardService: GraphicsCardService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.graphicsCard1Id = Number(this.route.snapshot.paramMap.get('id1'));
    this.graphicsCard2Id = Number(this.route.snapshot.paramMap.get('id2'));

    this.graphicsCardService.getGraphicsCard(this.graphicsCard1Id).subscribe(this.getGraphicsCard1());
    this.graphicsCardService.getGraphicsCard(this.graphicsCard2Id).subscribe(this.getGraphicsCard2());
  }

  getGraphicsCard1() {
    // @ts-ignore
    return data => {
      this.graphicsCard1 = data;
    }
  }

  getGraphicsCard2() {
    // @ts-ignore
    return data => {
      this.graphicsCard2 = data;
    }
  }

}
