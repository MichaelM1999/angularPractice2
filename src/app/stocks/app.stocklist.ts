import { Component, OnInit } from '@angular/core'
import { StockService } from './shared/stock.service'
@Component({
    selector: 'stocks-list',
    templateUrl:'./app.stocklist.html'

})
export class StockListComponent implements OnInit {
    Stocks:any[]

    constructor(private stockService: StockService) {
        
    }
    ngOnInit() {
        this.Stocks = this.stockService.getStocks()
    }
}