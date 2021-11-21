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

    const searchUrl = `${this.baseUrl}`;

    return this.httpClient.get<GetResponseProcessors>(searchUrl);
  }

  getProcessor(procesorId: number) {
    const searchUrl = `${this.baseUrl}/${procesorId}`

    return this.httpClient.get<Processor>(searchUrl);
  }

}

interface GetResponseProcessors{
  content: {
    processors: Processor[]
  }
}
