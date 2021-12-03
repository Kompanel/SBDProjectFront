import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Game} from "../model/game";
import {GameDto} from "../model/game-dto";



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

  getGame(gameId: number) : Observable<Game> {
    const searchUrl = `${this.baseUrl}/${gameId}`

    return this.httpClient.get<Game>(searchUrl);
  }

  addGame(game: GameDto): Observable<GameDto> {

    const body = JSON.stringify(game);
    console.log(body)


    return this.httpClient.post<GameDto>(this.baseUrl, body, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }

}

export interface GetResponseGames {
  content: {
    games: Game[]
  }
}
