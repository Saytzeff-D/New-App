import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public baseUrl = 'http://localhost/api/new-app/';
  constructor(public http: HttpClient) { }

  postObj(obj){
    return this.http.post(`${this.baseUrl}createUser.php`, obj)
  }
  getUser(){
    return this.http.get(`${this.baseUrl}myuser.php`);
  }
}
