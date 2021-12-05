import { Component, OnInit } from '@angular/core';
import {Game} from "../../model/game";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../../service/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-remove-game',
  templateUrl: './remove-game.component.html',
  styleUrls: ['./remove-game.component.css']
})
export class RemoveGameComponent implements OnInit {

  games: Game[] = [];
  // @ts-ignore
  gameToRemove: Game;
  // @ts-ignore
  removeGameFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService,
              private router: Router) { }

  ngOnInit(): void {
    this.gameService.getGamesList().subscribe(this.gameList());
    this.removeGameFormGroup = this.formBuilder.group({
      game: ['', Validators.required]
    });
  }

  onSubmit() {
    this.gameToRemove = this.removeGameFormGroup.get('game')?.value;
    this.gameService.removeGame(this.gameToRemove.id);
    this.router.navigateByUrl("/admin");
  }

  gameList() {
    // @ts-ignore
    return data => {
      this.games = data;
    }
  }

}
