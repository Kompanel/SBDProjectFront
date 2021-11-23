import {Component, OnInit} from '@angular/core';
import {GraphicsCard} from "../../model/graphics-card";
import {GraphicsCardService} from "../../service/graphics-card.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-graphics-card-details',
  templateUrl: './graphics-card-details.component.html',
  styleUrls: ['./graphics-card-details.component.css']
})
export class GraphicsCardDetailsComponent implements OnInit {

  graphicsCard: GraphicsCard = new GraphicsCard();

  constructor(private graphicsCardService: GraphicsCardService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.graphicsCardDetails());
  }

  graphicsCardDetails() {

    const graphicsCardId: number = Number(this.route.snapshot.paramMap.get('id'));

    this.graphicsCardService.getGraphicsCard(graphicsCardId).subscribe(data => {
      this.graphicsCard = data;
    });

  }

}
