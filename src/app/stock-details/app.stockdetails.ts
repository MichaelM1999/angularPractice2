import { Component } from '@angular/core'
import { StockService } from '../stocks/shared/stock.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl:'./app.stockdetails.html'
})
export class StockDetailsComponent {
    stock:any
    constructor(private stockService: StockService, private route:ActivatedRoute) {

    }
    ngOnInit() {
        this.stock = this.stockService.getStock(+this.route.snapshot.params['id'])
        console.log(typeof(this.route.snapshot.params['id']))
    }   
}