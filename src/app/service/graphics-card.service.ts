import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../model/game";
import {GraphicsCard} from "../model/graphics-card";

@Injectable({
  providedIn: 'root'
})
export class GraphicsCardService {
  private baseUrl = 'http://localhost:8080/graphics-cards';

  constructor(private httpClient: HttpClient) { }


  getGraphicsCardsList(): Observable<GetResponseGraphicsCard>{

    const searchUrl = `${this.baseUrl}`;

    return this.httpClient.get<GetResponseGraphicsCard>(searchUrl);
  }

  getGraphicsCard(gameId: number) {
    const searchUrl = `${this.baseUrl}/${gameId}`

    return this.httpClient.get<GraphicsCard>(searchUrl);
  }

}

export interface GetResponseGraphicsCard {
  content: {
    graphicsCards: GraphicsCard[]
  }
}
