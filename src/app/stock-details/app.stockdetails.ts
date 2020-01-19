import { Component } from '@angular/core'
import { StockService } from '../stocks/shared/stock.service'
import { ActivatedRoute } from '@angular/router'
import { stockSearch } from '../services/api.stock';
import { Chart } from 'chart.js';

@Component({
    templateUrl:'./app.stockdetails.html'
})
export class StockDetailsComponent {
    public returnedStock: any
    stock:any
    chart = [];
    chart2 =[];
    constructor(private stockService: StockService, private stockSearch: stockSearch,
        private route:ActivatedRoute) {

    }
    ngOnInit() {
        this.stock = this.stockService.getStock(+this.route.snapshot.params['id'])
        console.log(typeof(this.route.snapshot.params['id']))
        console.log(this.stock)
        this.stockInfo(this.stock.symbol)
    } 
    stockInfo(searchItem){
        console.log( typeof searchItem)
        const priceArry = []
        const dateArry = []
        const volumeArry = []
        const reversePriceArry = []
        const reverseDateArry = []
        const reverseVolumeArry = []
        this.stockSearch.getStockAuto(searchItem).subscribe((res)=> {
            console.log(res)

            let dailyseries = res["Time Series (Daily)"]
            // console.log(res["Meta Data"])
            // console.log(dailyseries)

            for (let key in dailyseries){
                dateArry.push([key][0])
                priceArry.push(dailyseries[key]['4. close']);
                volumeArry.push(dailyseries[key]["6. volume"])
            }
            reverseVolumeArry.push(volumeArry.reverse())
            reversePriceArry.push(priceArry.reverse())
            reverseDateArry.push(dateArry.reverse())
            console.log(reversePriceArry[0][6])
            console.log(reverseDateArry)
            console.log(reverseVolumeArry)
            //date arrays
            let weeklyDates = reverseDateArry[0].slice(92, 99)
            let monthlyDates = reverseDateArry[0].slice(69, 99)

            console.log(monthlyDates)
            this.returnedStock = {
                priceArry,
                dateArry,
                dailychange: ((reversePriceArry[0][99])-(reversePriceArry[0][98])).toString().slice(0,8),
                dailychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][98])),
                weeklychange: ((reversePriceArry[0][99])-(reversePriceArry[0][92])).toString().slice(0,8),
                weeklychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][98])),
                monthlychange: ((reversePriceArry[0][99])-(reversePriceArry[0][69])).toString().slice(0,8),
                monthlychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][98])),
                weeklyDates: (reverseDateArry[0].slice(92, 99)),
                weeklyData: (reversePriceArry[0].slice(92, 99)),
                monthlyDates: (monthlyDates),
                monthlyData: (reversePriceArry[0].slice(69, 99)),
                currentValue: (reversePriceArry[0][99]),
                symbol: res["Meta Data"]["2. Symbol"],
                volume: reverseVolumeArry[0][99],
                dailyPercentage: ((reversePriceArry[0][98])/(reversePriceArry[0][99])-1),
            }
            this.chart = new Chart('canvas', {
                type: 'line',
                data: {
                    labels: this.returnedStock.weeklyDates,
                    datasets: [{
                        label: 'Value in USD$',
                        data: this.returnedStock.weeklyData,
                        backgroundColor: [
                            'rgba(10, 245, 155, 0.2)',
                            'rgba(10, 245, 155, 0.2)',
                            'rgba(10, 245, 155, 0.2)',
                            'rgba(10, 245, 155, 0.2)',
                            'rgba(10, 245, 155, 0.2)',
                            'rgba(10, 245, 155, 0.2)'
                        ],
                        borderColor: [
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)',
                            'rgba(0, 0, 0, 1)'
                        ],
                        borderWidth: 1
                        }]
                    },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                }}]}}
                })
                this.chart2 = new Chart('canvas2', {
                    type: 'line',
                    data: {
                        labels: this.returnedStock.monthlyDates,
                        datasets: [{
                            label: 'Value in USD$',
                            data: this.returnedStock.monthlyData,
                            backgroundColor: [
                                'rgba(10, 245, 155, 0.2)',
                                'rgba(10, 245, 155, 0.2)',
                                'rgba(10, 245, 155, 0.2)',
                                'rgba(10, 245, 155, 0.2)',
                                'rgba(10, 245, 155, 0.2)',
                                'rgba(10, 245, 155, 0.2)'
                            ],
                            borderColor: [
                                'rgba(0, 0, 0, 1)',
                                'rgba(0, 0, 0, 1)',
                                'rgba(0, 0, 0, 1)',
                                'rgba(0, 0, 0, 1)',
                                'rgba(0, 0, 0, 1)',
                                'rgba(0, 0, 0, 1)'
                            ],
                            borderWidth: 1
                            }]
                        },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                        }}]}}
                        }) 
            }
    )
    }  
}