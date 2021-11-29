import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Game} from "../../model/game";
import {Processor} from "../../model/processor";
import {GraphicsCard} from "../../model/graphics-card";
import {ProcessorService} from "../../service/processor.service";
import {GameService} from "../../service/game.service";
import {GraphicsCardService} from "../../service/graphics-card.service";
import {GameRunService} from "../../service/game-run.service";

@Component({
  selector: 'app-game-run-checker',
  templateUrl: './game-run-checker.component.html',
  styleUrls: ['./game-run-checker.component.css']
})
export class GameRunCheckerComponent implements OnInit {

  // @ts-ignore
  yourSetupFormGroup: FormGroup;

  games: Game[] = [];
  processors: Processor[] = [];
  graphicsCards: GraphicsCard[] = [];
  minimalCardGraphics: boolean = false;
  minimalProcessor: boolean = false;
  minimalRam: boolean = false;
  recommendedCardGraphics: boolean = false;
  recommendedProcessor: boolean = false;
  recommendedRam: boolean = false;
  received: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private processorService: ProcessorService,
              private gameService: GameService,
              private graphicsCardService: GraphicsCardService,
              private gameRunService: GameRunService) {
  }

  ngOnInit(): void {
    this.processorService.getProcessorList().subscribe(this.processorList());
    this.gameService.getGamesList().subscribe(this.gameList());
    this.graphicsCardService.getGraphicsCardsList().subscribe(this.graphicsCardList());

    this.games = this.games.filter(game => game.gamePlatform.platformName == "PC");

    this.yourSetupFormGroup = this.formBuilder.group({
      game: ['', Validators.required],
      processor: ['', Validators.required],
      graphicsCard: ['', Validators.required],
      ram: ['', Validators.required]
    })
  }

  onSubmit() {
    let gameId = this.yourSetupFormGroup.get('game')?.value.id
    let graphicsCardId = this.yourSetupFormGroup.get('graphicsCard')?.value.cardId;
    let processorId = this.yourSetupFormGroup.get('processor')?.value.processorId;
    let ram = this.yourSetupFormGroup.get('ram')?.value

    this.willItRun(gameId, graphicsCardId, processorId, ram);

  }

  willItRun(gameId: number, graphicsCardId: number, processorId: number, ram: number) {
    this.gameRunService.getWillItRunResponse(gameId, processorId, graphicsCardId, ram).subscribe(this.processResult);
    console.log("yes");
    this.received = true;
  }

  processorList() {
    // @ts-ignore
    return data => {
      this.processors = data;
    }
  }

  gameList() {
    // @ts-ignore
    return data => {
      this.games = data;
    }
  }

  graphicsCardList() {
    // @ts-ignore
    return data => {
      this.graphicsCards = data;
    }
  }

  processResult() {
    // @ts-ignore
    return data => {
      this.minimalCardGraphics = data.minimalCardGraphics;
      this.minimalProcessor = data.minimalCardGraphics;
      this.minimalRam = data.minimalCardGraphics;
      this.recommendedCardGraphics = data.minimalCardGraphics;
      this.recommendedProcessor = data.minimalCardGraphics;
      this.recommendedRam = data.minimalCardGraphics;
    }
  }

}
