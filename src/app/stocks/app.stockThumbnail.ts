import { Component, Input, OnInit } from '@angular/core'
import { BackendHook} from '../services/api.backendhook';

@Component({
    selector: 'stock-thumbnail',
    templateUrl: './app.stockThumbnail.html'
})
export class StockThumbnailComponent implements OnInit{
    @Input() Stock:any
    stockinfo:any
    constructor(private backend: BackendHook){

    }
    ngOnInit(){

    }
    handleUnfollow(stockName){
        this.stockinfo ={
            owner: sessionStorage.getItem("username"),
            stock_name: this.Stock.stock_name
        }
        this.backend.removeStock(this.stockinfo).subscribe((res)=>{
            window.location.reload();
        })
    }
}