import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Processor} from "../model/processor";

@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

  private baseUrl = 'http://localhost:8080/processors';

  constructor(private httpClient : HttpClient) { }

  getProcessorList(): Observable<GetResponseProcessors>{

    const searchUrl = `${this.baseUrl}/al`;

    return this.httpClient.get<GetResponseProcessors>(searchUrl);
  }

}

interface GetResponseProcessors{
  processors: Processor[];
}
