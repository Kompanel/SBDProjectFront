import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../model/game";
import {GraphicsCard} from "../model/graphics-card";
import {GraphicsCardDto} from "../model/graphics-card-dto";

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

  addGraphicsCard(graphicsCard: GraphicsCardDto): Observable<GraphicsCardDto> {
    return this.httpClient.post<GraphicsCardDto>(this.baseUrl, graphicsCard);
  }

  removeGraphicsCard(graphicsCardToRemoveId: number) {
    const deleteUrl = `${this.baseUrl}/${graphicsCardToRemoveId}`;
    this.httpClient.delete(deleteUrl).subscribe();
  }

  editGraphicsCard(graphicsCardToEditId: number, graphicsCard: GraphicsCardDto) {
    const editUrl = `${this.baseUrl}/${graphicsCardToEditId}`;
    this.httpClient.put(editUrl, graphicsCard, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).subscribe();
  }

}

export interface GetResponseGraphicsCard {
  content: {
    graphicsCards: GraphicsCard[]
  }
}
