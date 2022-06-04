import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BskServiceService {

  baseUrl: string = "https://gorest.co.in/public/v2/users"

  constructor(private httpClient: HttpClient) { }



  createUser(user: User): Observable<any>{
    return this.httpClient.post(this.baseUrl, user, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer c5bcd587332d79ee36869c30e189684de5774b55349a24d0bf58ebde8b72b744`
      }});
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/' + userId, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer c5bcd587332d79ee36869c30e189684de5774b55349a24d0bf58ebde8b72b744`
      }})
  }
}
