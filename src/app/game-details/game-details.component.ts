import { Component, OnInit } from '@angular/core';
import {GameService} from "../service/game.service";
import {Game} from "../model/game";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  game: Game = new Game();

  constructor(private gameService: GameService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.productDetails());
  }

  productDetails(){

    const gameId: number = Number(this.route.snapshot.paramMap.get('id'));

    this.gameService.getGame(gameId).subscribe(data =>{
      this.game = data;
    });

  }

}
