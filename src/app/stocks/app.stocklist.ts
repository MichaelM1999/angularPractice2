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
        console.log(this.User)
    }
    getstocks(user) {
        console.log(user)
        this.backend.getFollowedStock(user).subscribe((res)=>{
            console.log(res)
            this.Stocks = res
        })
    }
}