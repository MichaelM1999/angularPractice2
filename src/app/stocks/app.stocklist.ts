import { Component } from '@angular/core'

@Component({
    selector: 'stocks-list',
    templateUrl:'./app.stocklist.html'
})
export class StockListComponent{
    Stocks = [{
        id: 1,
        symbol: "CEI",
        percentage: "10",
        value: "12.67",
        name: "Chamber Energy Exchange"
    },
    {
        id: 2,
        symbol: "GOOG",
        percentage: "12",
        value: "1032.23",
        name: "Google"
    },
    {
        id: 1,
        symbol: "T",
        percentage: "15.3",
        value: "234.56",
        name: "Tesla"
    },
    {
        id: 1,
        symbol: "S",
        percentage: "-5",
        value: "23.53",
        name: "Sprint"
    },]
}