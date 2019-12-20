import { Injectable } from '@angular/core'

@Injectable()
    export class StockService{
        getStocks() {
            return STOCKS
        }
        getStock(id:number) {
            return STOCKS.find(stock => stock.id === id)
        }
    }
    const STOCKS = [{
        id: 1,
        symbol: "CEI",
        percentage: "10",
        value: "12.67",
        name: "Chamber Energy Exchange",
        volume: "13345 units"
        
    },
    {
        id: 2,
        symbol: "GOOG",
        percentage: "12",
        value: "1032.23",
        name: "Google",
        volume: "174 units"
    },
    {
        id: 3,
        symbol: "T",
        percentage: "15.3",
        value: "234.56",
        name: "Tesla",
        volume: "13455 units"
    },
    {
        id: 4,
        symbol: "S",
        percentage: "-5",
        value: "23.53",
        name: "Sprint",
        volume: "643 units"
    },]
