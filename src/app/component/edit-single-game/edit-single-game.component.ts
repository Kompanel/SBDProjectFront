import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../service/game.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameDto} from "../../model/game-dto";
import {GamePlatform} from "../../model/game-platform";
import {GamePlatformService} from "../../service/game-platform.service";

@Component({
  selector: 'app-edit-single-game',
  templateUrl: './edit-single-game.component.html',
  styleUrls: ['./edit-single-game.component.css']
})
export class EditSingleGameComponent implements OnInit {

  gamePlatforms: GamePlatform[] = [];
  // @ts-ignore
  editGameForm: FormGroup;
  gameEditId: number = 0;

  constructor(private route: ActivatedRoute,
              private gameService: GameService,
              private formBuilder: FormBuilder,
              private gamePlatformService: GamePlatformService,
              private router: Router) { }

  ngOnInit(): void {
    this.gamePlatformService.getGamePlatformsList().subscribe(this.gamePlatformList());
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
    let game = new GameDto();
    game.gameName = this.editGameForm.get('gameName')?.value;
    game.gamePremiere = this.editGameForm.get('gamePremiere')?.value;
    game.gamePlatformId = this.editGameForm.get('gamePlatform')?.value.platformId;
    game.gamePrice = this.editGameForm.get('gamePrice')?.value;
    if(this.editGameForm.get('imageUrl')?.value != ''){
      game.imageUrl = this.editGameForm.get('imageUrl')?.value;
    }
    this.gameService.editGame(this.gameEditId, game);
    this.router.navigateByUrl("/admin");
  }

  gamePlatformList() {
    // @ts-ignore
    return data => {
      this.gamePlatforms = data;
    }
  }

}
