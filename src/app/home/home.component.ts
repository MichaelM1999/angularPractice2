import { Component } from '@angular/core';
import { stockSearch } from '../services/api.stock';

@Component({
    selector: 'HomeComponent',
    templateUrl: '/home.template.html'

})
export class HomeComponent {
    returnedStock:any[]

    constructor(private stockSearch: stockSearch){

    }
    handleSearch(searchItem){
        this.stockSearch.getStock(searchItem)
    }
}