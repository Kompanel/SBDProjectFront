import { Component, OnInit } from '@angular/core';
import {GameService} from "../../service/game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  // @ts-ignore
  games: GetResponseGames;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.listGame();
  }

  listGame(){
    this.gameService.getGamesList().subscribe(
      data => {
        this.games = data;
      }
    );
  }

}
