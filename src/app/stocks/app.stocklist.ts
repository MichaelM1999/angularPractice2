import { Component } from '@angular/core'

@Component({
    selector: 'stocks-list',
    templateUrl:'./app.stocklist.html'
})
export class StockListComponent{
    Stocks = [{
        id: 1,
        name: "CEI",
        percentage: "10",
        value: "12.67"
    },
    {
        id: 2,
        name: "GOOG",
        percentage: "12",
        value: "1032.23"
    },
    {
        id: 1,
        name: "T",
        percentage: "15.3",
        value: "234.56"
    },
    {
        id: 1,
        name: "S",
        percentage: "-5",
        value: "23.53"
    },]
}