import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class stockSearch {
    constructor(private http: HttpClient){

    }
    getStock(searchItem){
        const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
        const BASEURL2 = "&outputsize=compact&apikey=";
        const APIKEY = "ZQ01F2MEZJSX8EYJ";
        let query = BASEURL + searchItem.searchInput + BASEURL2 + APIKEY;
        console.log(query)
        let obs = this.http.get(query)
        obs.subscribe((response) => console.log(response))
    }
}