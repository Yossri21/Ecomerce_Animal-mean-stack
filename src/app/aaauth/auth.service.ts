import { Injectable } from '@angular/core';
import {Http,Headers, Response} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {User} from "../Model/User";
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class AuthService {


  constructor(private http: HttpClient) { }

  signup(user:User){
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({'content-type':'application/json'});
    return this.http.post('/user', body, {headers: headers})
      .map((response) => {console.log(response); return response})
      .catch((error) => Observable.throw(error.json()));

  }

  signin(user:User){
    const body = JSON.stringify(user);
    console.log(body);
    const headers = new HttpHeaders({'content-type':'application/json'});
    return new Promise((resolve, reject) =>
      this.http.post('/user/login', body, {headers: headers})
        //.map(response => response.json()) moch lezem
        .subscribe(data => resolve(data), error => reject(error)));
        //.catch((error: Response) => Observable.throw(error.json()));

  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
