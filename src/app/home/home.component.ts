import { Component, OnInit } from '@angular/core';
import { stockSearch } from '../services/api.stock';
import { Chart } from 'chart.js';
import { BackendHook } from '../services/api.backendhook'

@Component({
    selector: 'HomeComponent',
    templateUrl: '/home.template.html',
})
export class HomeComponent implements OnInit{
    public returnedStock:any
    chart = [];
    chart2 =[];

    constructor(private stockSearch: stockSearch, private API: BackendHook){

    }
    ngOnInit(){ 

    }
    handlefollow(stockName){
        let followDetails ={
            stock: stockName,
            user: sessionStorage.getItem("username"),
        }
        this.API.followStock(followDetails).subscribe((res)=>{
            if (res['err']){
                window.alert(followDetails.user +" already following " + followDetails.stock)
            }
            else {
                window.location.href = "/src/stocks"
            }
        })
    }
    handleInfo(searchItem){
        // this.API.testRoute().subscribe((res)=>{
        //     console.log(res)
        // })
        console.log(searchItem)
        window.open( 
            "https://www.nyse.com/site-search?q="+ searchItem, "_blank");
    }
    handleSearch(searchItem){
        const priceArry = []
        const dateArry = []
        const reversePriceArry = []
        const reverseDateArry = []
        this.stockSearch.getStock(searchItem).subscribe((res)=> {
            let dailyseries = res["Time Series (Daily)"]

            for (let key in dailyseries){
                dateArry.push([key][0])
                priceArry.push(dailyseries[key]['4. close']);
            }
            reversePriceArry.push(priceArry.reverse())
            reverseDateArry.push(dateArry.reverse())
            //date arrays
            let weeklyDates = reverseDateArry[0].slice(92, 99)
            let monthlyDates = reverseDateArry[0].slice(69, 99)
            //returning Graph Object
            this.returnedStock = {
                priceArry,
                dateArry,
                dailychange: ((reversePriceArry[0][99])-(reversePriceArry[0][98])).toString().slice(0,8),
                dailychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][98])),
                weeklychange: ((reversePriceArry[0][99])-(reversePriceArry[0][92])).toString().slice(0,8),
                weeklychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][92])),
                monthlychange: ((reversePriceArry[0][99])-(reversePriceArry[0][69])).toString().slice(0,8),
                monthlychangeCheck: Math.sign((reversePriceArry[0][99])-(reversePriceArry[0][69])),
                weeklyDates: (weeklyDates),
                weeklyData: (reversePriceArry[0].slice(92, 99)),
                monthlyDates: (monthlyDates),
                monthlyData: (reversePriceArry[0].slice(69, 99)),
                currentValue: (reversePriceArry[0][99]),
            }
            //Creating Charts
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
    )}
}