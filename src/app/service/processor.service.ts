import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Processor} from "../model/processor";
import {ProcessorDto} from "../model/processor-dto";
import {GameDto} from "../model/game-dto";

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

  getProcessor(processorId: number) {
    const searchUrl = `${this.baseUrl}/${processorId}`

    return this.httpClient.get<Processor>(searchUrl);
  }

  addProcessor(processor: ProcessorDto): Observable<ProcessorDto> {
    return this.httpClient.post<ProcessorDto>(this.baseUrl, processor, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  editProcessor(processorEditId: number, processor: ProcessorDto) {
    const editUrl = `${this.baseUrl}/${processorEditId}`;
    this.httpClient.put(editUrl, processor).subscribe();
  }

  removeProcessor(processorId: number) {
    const deleteUrl = `${this.baseUrl}/${processorId}`
    this.httpClient.delete(deleteUrl).subscribe();
  }
}

interface GetResponseProcessors{
  content: {
    processors: Processor[]
  }
}
