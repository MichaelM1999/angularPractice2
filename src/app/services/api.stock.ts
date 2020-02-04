import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as moment from 'moment';
import { of, Observable } from 'rxjs';

@Injectable()
export class stockSearch {
    constructor(private http: HttpClient){

    }
    getStock(searchItem): Observable<object>{
        const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
        const BASEURL2 = "&outputsize=compact&apikey=";
        const APIKEY = "ZQ01F2MEZJSX8EYJ";
        let query = BASEURL + searchItem.searchInput + BASEURL2 + APIKEY;
         return this.http.get(query)
        
    }
    getStockAuto(searchItem): Observable<object>{
        const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
        const BASEURL2 = "&outputsize=compact&apikey=";
        const APIKEY = "ZQ01F2MEZJSX8EYJ";
        let query = BASEURL + searchItem + BASEURL2 + APIKEY;
         return this.http.get(query)
    }
}