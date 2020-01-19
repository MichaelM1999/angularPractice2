import { Component, OnInit } from '@angular/core'
import { StockService } from './shared/stock.service'
import { BackendHook } from '../services/api.backendhook'
@Component({
    selector: 'stocks-list',
    templateUrl:'./app.stocklist.html'

})
export class StockListComponent implements OnInit {
    Stocks:any[]
    

    constructor(private stockService: StockService, private backend: BackendHook) {
        
    }
    ngOnInit() {
        this.Stocks = this.stockService.getStocks()
    }
}