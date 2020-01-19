import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { of, Observable } from 'rxjs';

export interface Stock {
  name: string
}
@Injectable()
export class BackendHook {
    constructor(private http: HttpClient){
}
    getStocks() {
      return 
      this.http.get('/api/followedStocks')
    }
    //login page
    getUser(user): Observable<object>{

        console.log('hello', user)
        return this.http.post("/api/user/login", user);
      }
      // account page 
      newUser(userData): Observable<any>{
        return Observable.create(observer => {
        console.log('HELLO', userData)
        this.http.post("/api/user", userData).subscribe((data: any)=>{
          console.log("worked")
          observer.complete();
        })
      })
    }
      // follow page
      newStock(stockData): Observable<object> {
        
        console.log("hello", stockData);
        return this.http.post("/api/user/stocks", stockData);
      }
      //watchlist
      // getStocks(stocks) {
      //   console.log('searching stocks', stocks)
      //   return this.http.post('/api/user/search', stocks)
      // }
      //watchlist
      deleteStock(stocks) {
        console.log('deleting stock ', stocks)
        return this.http.post('/api/user/delete', stocks)
      }
}