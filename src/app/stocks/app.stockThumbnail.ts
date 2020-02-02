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
        this.stockinfo = {
            
        }
    }
    handleUnfollow(stockName){
        this.stockinfo ={
            owner: sessionStorage.getItem("username"),
            stock_name: stockName
        }
        this.backend.removeStock(this.stockinfo).subscribe((res)=>{
            console.log(res)
            
        })
    }
}