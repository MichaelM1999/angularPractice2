import { Component, OnInit } from '@angular/core';
import { stockSearch } from '../services/api.stock';




@Component({
    selector: 'HomeComponent',
    templateUrl: '/home.template.html'

})
export class HomeComponent implements OnInit{
   public returnedStock:any

    constructor(private stockSearch: stockSearch){
    }
    ngOnInit(){
        this.stockSearch.getDate().subscribe((res)=>{
            console.log(res)
        })
    }
    handleSearch(searchItem){
        const priceArry = []
        const dateArry = []
        const reversePriceArry = []
        const reverseDateArry = []
        this.stockSearch.getStock(searchItem).subscribe((res)=> {
            // console.log(res)

            let dailyseries = res["Time Series (Daily)"]
            // console.log(res["Meta Data"])
            // console.log(dailyseries)

            for (let key in dailyseries){
                dateArry.push([key][0])
                priceArry.push(dailyseries[key]['4. close']);
            }
            reversePriceArry.push(priceArry.reverse())
            reverseDateArry.push(dateArry.reverse())
            console.log(reversePriceArry[0][6])
            // console.log(priceArry.reverse(), dateArry.reverse(), "reversed")
            // for (let i = 99; i < priceArry.length; i--){
            //     console.log(priceArry[i])
            // }
            console.log(reversePriceArry)
            console.log(((reversePriceArry[0][0])-(reversePriceArry[0][6])).toString().slice(0,8))
            this.returnedStock = {
                priceArry,
                dateArry,
                dailychange: ((reversePriceArry[0][99])-(reversePriceArry[0][98])).toString().slice(0,8),
                dailychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][98])),
                weeklychange: ((reversePriceArry[0][99])-(reversePriceArry[0][92])).toString().slice(0,8),
                weeklychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][98])),
                monthlychange: ((reversePriceArry[0][99])-(reversePriceArry[0][69])).toString().slice(0,8),
                monthlychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][98])),
                currentValue: (reversePriceArry[0][99])
            }
        })
    }
}