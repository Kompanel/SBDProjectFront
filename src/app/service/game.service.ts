import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Game} from "../model/game";



@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/games';

  constructor(private httpClient: HttpClient) { }

  // return list of games by page
  getGamesListPaginate(thePage: number,
                       thePageSize: number): Observable<GetResponseGames>{

    const searchUrl = `${this.baseUrl}/all?page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseGames>(searchUrl);

  }

  getGamesList(): Observable<GetResponseGames>{

    const searchUrl = `${this.baseUrl}/al`;

    return this.httpClient.get<GetResponseGames>(searchUrl);
  }

}

interface GetResponseGames {
  games: Game[];
}
