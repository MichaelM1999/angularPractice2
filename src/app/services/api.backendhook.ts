import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { of, Observable } from 'rxjs';

export interface Stock {
  name: string
}
@Injectable()
export class BackendHook {

  uri = "http://localhost:4202"

    constructor(private http: HttpClient){
}
//takes user object
  createUser(user) {
    return this.http.post('/user/create', user);
  }
  loginUser(user) {
    return this.http.post('/user/login', user);
  }
  followStock(stock){
    return this.http.post('/shares/follow', stock);
  }
  getFollowedStock(stock){
    return this.http.post('/shares/find', stock);
  }
  removeStock(stock){
    return this.http.post('/shares/delete', stock);
  }
  testRoute(){
    return this.http.get(`${this.uri}/foo`);
  }
}