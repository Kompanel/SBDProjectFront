import { Component, OnInit } from '@angular/core';
import {GameRunService} from "../../service/game-run.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-run-resoult',
  templateUrl: './game-run-resoult.component.html',
  styleUrls: ['./game-run-resoult.component.css']
})
export class GameRunResoultComponent implements OnInit {

  minimalCardGraphics: boolean = false;
  minimalProcessor: boolean = false;
  minimalRam: boolean = false;
  recommendedCardGraphics: boolean = false;
  recommendedProcessor: boolean = false;
  recommendedRam: boolean = false;
  received: boolean = false;

  constructor(private gameRunService: GameRunService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.gameRunResultDetails());
  }

  gameRunResultDetails(){
    const gameId: number = Number(this.route.snapshot.paramMap.get('gameId'));
    const processorId: number = Number(this.route.snapshot.paramMap.get('processorId'));
    const cardId: number = Number(this.route.snapshot.paramMap.get('cardId'));
    const ram: number = Number(this.route.snapshot.paramMap.get('ram'));
    this.gameRunService.getWillItRunResponse(gameId, processorId, cardId, ram).subscribe(this.processResult());
    console.log(this.minimalProcessor);
  }

  processResult() {
    // @ts-ignore
    return data => {
        this.minimalCardGraphics = data.minimalGraphicsCard;
        this.minimalProcessor = data.minimalProcessor;
        this.minimalRam = data.minimalRam;
        this.recommendedCardGraphics = data.recommendedGraphicsCard;
        this.recommendedProcessor = data.recommendedProcessor;
        this.recommendedRam = data.recommendedRam;

    }
  }

}
