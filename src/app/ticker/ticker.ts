import { Component, OnInit } from '@angular/core'
import { StockService } from '../stocks/shared/stock.service'
@Component({
    selector: 'Ticker',
    templateUrl: './ticker.html'
})
export class Ticker implements OnInit{
    tickerlist:string[];
    tickerItem: any;
    constructor(private StockService: StockService){

}
ngOnInit(){
    this.tickerlist = this.StockService.getSymbols()
    this.currentStock()
}

    currentStock(){
        let i = 0;
    const interval = setInterval(() => {
    let switchedStock = this.tickerlist[i];
    i += 1;
    this.tickerItem = switchedStock
    
    if (i >= this.tickerlist.length) {
      clearInterval(interval)
      this.currentStock();
      
    }
    }, 1000);
    }

}
