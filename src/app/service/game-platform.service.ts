import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GamePlatform} from "../model/game-platform";

@Injectable({
  providedIn: 'root'
})
export class GamePlatformService {

  private baseUrl = 'http://localhost:8080/game-platforms';

  constructor(private httpClient: HttpClient) { }

  getGamePlatformsList() : Observable<GetResponseGamePlatform> {
    const searchUrl = `${this.baseUrl}`;
    return this.httpClient.get<GetResponseGamePlatform>(searchUrl);
  }

}

export interface GetResponseGamePlatform {
    gamePlatforms: GamePlatform[];
}
