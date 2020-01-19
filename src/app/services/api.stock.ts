import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as moment from 'moment';
import { of, Observable } from 'rxjs';

@Injectable()
export class stockSearch {
    constructor(private http: HttpClient){

    }
    getDate(): Observable<string>{
                //////////////////////////////////
                const year = moment().format("YYYY");
                const month = moment().format("MM");
                const day = moment().format("DD");
                let todaysdate;
        
                const dayofweek = moment().format("dddd");
                if (dayofweek === "Monday" || 
                dayofweek === "Tuesday" || 
                dayofweek === "Wednesday" || 
                dayofweek === "Thursday" || 
                dayofweek === "Friday") {
                todaysdate = [year, month, day].join('-');
                }
                if (dayofweek === "Sunday") {
                let recentday = (moment().subtract(2, 'days').format("DD"));
                todaysdate = [year, month, recentday].join('-');
                }
                if (dayofweek === "Saturday") {
                    let recentday = (moment().subtract(1, 'days').format("DD"));
                    todaysdate = [year, month, recentday].join('-');
                }
                //////////////////////////////////////

        return of(todaysdate);
    }
    getStock(searchItem): Observable<object>{
        const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
        const BASEURL2 = "&outputsize=compact&apikey=";
        const APIKEY = "ZQ01F2MEZJSX8EYJ";



        let query = BASEURL + searchItem.searchInput + BASEURL2 + APIKEY;
        console.log(query)
         return this.http.get(query)
        
    }
    getStockAuto(searchItem): Observable<object>{
        const BASEURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
        const BASEURL2 = "&outputsize=compact&apikey=";
        const APIKEY = "ZQ01F2MEZJSX8EYJ";



        let query = BASEURL + searchItem + BASEURL2 + APIKEY;
        console.log(query)
         return this.http.get(query)
    }
}