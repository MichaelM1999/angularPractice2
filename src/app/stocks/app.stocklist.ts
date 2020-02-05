import { Component, OnInit } from '@angular/core'
import { StockService } from './shared/stock.service'
import { BackendHook } from '../services/api.backendhook'
@Component({
    selector: 'stocks-list',
    templateUrl:'./app.stocklist.html'

})
export class StockListComponent implements OnInit {
    Stocks:any
    User:any
    Defined: boolean
    constructor(private stockService: StockService, private backend: BackendHook) {
        
    }
    
    ngOnInit() {
        this.User = sessionStorage.getItem('username');
        this.getstocks(this.User)  
        console.log(this.Stocks);
    }
    getstocks(user) {
        let username ={
            username: user
        }
        this.backend.getFollowedStock(username).subscribe((res)=>{
            let results = res
            if ( results[0] === undefined){
                this.Defined = false
            } else {
                this.Stocks = res;
                this.Defined = true
            }
        })
    }
}