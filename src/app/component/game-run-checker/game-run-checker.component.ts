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

  gameId: number = -1;
  graphicsCardId: number = -1;
  processorId: number = -1;
  ram: number = -1;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private processorService: ProcessorService,
              private gameService: GameService,
              private graphicsCardService: GraphicsCardService) {
  }

  ngOnInit(): void {
    this.processorService.getProcessorList().subscribe(this.processorList());
    this.gameService.getPcGameSList().subscribe(this.gameList());
    this.graphicsCardService.getGraphicsCardsList().subscribe(this.graphicsCardList());

    this.yourSetupFormGroup = this.formBuilder.group({
      game: ['', Validators.required],
      processor: ['', Validators.required],
      graphicsCard: ['', Validators.required],
      tempRam: ['', Validators.required]
    })
  }

  onSubmit() {
    this.gameId = this.yourSetupFormGroup.get('game')?.value.id
    this.graphicsCardId = this.yourSetupFormGroup.get('graphicsCard')?.value.cardId;
    this.processorId = this.yourSetupFormGroup.get('processor')?.value.processorId;
    this.ram = this.yourSetupFormGroup.get('tempRam')?.value
    console.log(`/pc-game-run-test/${this.gameId}/${this.processorId}/${this.graphicsCardId}/${this.ram}`)
    this.router.navigateByUrl(`/pc-game-run-test/${this.gameId}/${this.processorId}/${this.graphicsCardId}/${this.ram}`)
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

}
