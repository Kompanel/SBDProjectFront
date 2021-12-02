import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../model/game";



@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/games';

  constructor(private httpClient: HttpClient) { }


  getGamesList(): Observable<GetResponseGames>{

    const searchUrl = `${this.baseUrl}`;

    return this.httpClient.get<GetResponseGames>(searchUrl);
  }

  getPcGameSList(): Observable<GetResponseGames>{
    const searchUrl = `${this.baseUrl}/PC`;
    return this.httpClient.get<GetResponseGames>(searchUrl);
  }

  getGame(gameId: number) {
    const searchUrl = `${this.baseUrl}/${gameId}`

    return this.httpClient.get<Game>(searchUrl);
  }
}

export interface GetResponseGames {
  content: {
    games: Game[]
  }
}
