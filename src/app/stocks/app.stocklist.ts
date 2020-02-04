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

    constructor(private stockService: StockService, private backend: BackendHook) {
        
    }
    
    ngOnInit() {
        this.User = sessionStorage.getItem('username');
        this.getstocks(this.User)  
    }
    getstocks(user) {
        let username ={
            username: user
        }
        this.backend.getFollowedStock(username).subscribe((res)=>{
            this.Stocks = res
        })
    }
}