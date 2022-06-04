import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameRunService {

  private baseUrl = 'http://localhost:8080/games/check_requirements';

  constructor(private httpClient: HttpClient) { }

  getWillItRunResponse(game: number, processor: number, graphicsCard: number, ram: number): Observable<GetResponseWillItRun> {
    const searchUrl = `${this.baseUrl}?gameId=${game}&processorId=${processor}&cardId=${graphicsCard}&ram=${ram}`;

    console.log(searchUrl)

    return this.httpClient.get<GetResponseWillItRun>(searchUrl);
  }

}

export interface GetResponseWillItRun {
  minimalGraphicsCard: boolean;
  minimalProcessor: boolean;
  minimalRam: boolean;
  recommendedGraphicsCard: boolean;
  recommendedProcessor: boolean;
  recommendedRam: boolean;
}
