import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../service/game.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameDto} from "../../model/game-dto";
import {GamePlatform} from "../../model/game-platform";
import {GamePlatformService} from "../../service/game-platform.service";
import {Game} from "../../model/game";

@Component({
  selector: 'app-edit-single-game',
  templateUrl: './edit-single-game.component.html',
  styleUrls: ['./edit-single-game.component.css']
})
export class EditSingleGameComponent implements OnInit {

  gamePlatforms: GamePlatform[] = [];
  editGameForm!: FormGroup;
  gameEditId: number = 0;

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private formBuilder: FormBuilder,
              private gamePlatformService: GamePlatformService,
              private router: Router) { }

  ngOnInit(): void {
    this.gamePlatformService.getGamePlatformsList().subscribe(data => {
      this.gamePlatforms = data.gamePlatforms;
    });
    this.gameEditId = Number(this.route.snapshot.paramMap.get('id'));
    this.editGameForm = this.formBuilder.group({
      gameName: ['', Validators.required],
      gamePremiere: ['', Validators.required],
      gamePrice: ['', Validators.required],
      gamePlatform: ['', Validators.required],
      imageUrl: ['']
    })
  }

  onSubmit() {
    let game: GameDto = new GameDto();
    game.gameName = this.editGameForm.get('gameName')?.value;
    game.gamePremiere = this.editGameForm.get('gamePremiere')?.value;
    game.gamePlatform = this.editGameForm.get('gamePlatform')?.value;
    game.gamePrice = this.editGameForm.get('gamePrice')?.value;
    if(this.editGameForm.get('imageUrl')?.value != ''){
      game.imageUrl = this.editGameForm.get('imageUrl')?.value;
    }
    this.gameService.editGame(this.gameEditId, game);
    this.router.navigateByUrl("/admin");
  }

}
