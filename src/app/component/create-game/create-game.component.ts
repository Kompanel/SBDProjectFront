import {Component, OnInit} from '@angular/core';
import {GameService} from "../../service/game.service";
import {GamePlatformService} from "../../service/game-platform.service";
import {GamePlatform} from "../../model/game-platform";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Game} from "../../model/game";
import {GameDto} from "../../model/game-dto";

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  gamePlatforms: GamePlatform[] = [];
  // @ts-ignore
  newGameFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService,
              private gamePlatformService: GamePlatformService) {
  }

  ngOnInit(): void {
    this.gamePlatformService.getGamePlatformsList().subscribe(this.gamePlatformList());
    this.newGameFormGroup = this.formBuilder.group({
      gameName: ['', Validators.required],
      gamePremiere: ['', Validators.required],
      gamePrice: ['', Validators.required],
      gamePlatform: ['', Validators.required],
      imageUrl: ['']
    })
  }

  onSubmit() {
    let game = new GameDto();
    game.gameName = this.newGameFormGroup.get('gameName')?.value;
    game.gamePremiere = this.newGameFormGroup.get('gamePremiere')?.value;
    game.gamePlatformId = this.newGameFormGroup.get('gamePlatform')?.value.platformId;
    game.gamePrice = this.newGameFormGroup.get('gamePrice')?.value;
    if(this.newGameFormGroup.get('imageUrl')?.value != ''){
      game.imageUrl = this.newGameFormGroup.get('imageUrl')?.value;
    }

    this.gameService.addGame(game).subscribe(data => console.log(data))
  }

  gamePlatformList() {
    // @ts-ignore
    return data => {
      this.gamePlatforms = data;
    }
  }

}

