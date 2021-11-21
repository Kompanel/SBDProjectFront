import { Component, OnInit } from '@angular/core';
import {GameService} from "../../service/game.service";
import {Game} from "../../model/game";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.listGame()
  }

  listGame() {
    this.gameService.getGamesList()
      .subscribe(this.processResult())
  }

  processResult() {
    // @ts-ignore
    return data => {
      this.games = data;
    }

  }

}
