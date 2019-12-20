import { Injectable } from '@angular/core'
import { StockService } from '../stocks/shared/stock.service'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'

@Injectable()
export class StockRouteActivator implements CanActivate {
    constructor(private stockService: StockService, private router:Router) {

    }
    canActivate(route:ActivatedRouteSnapshot) {
        const stockExists =   !!this.stockService.getStock(+route.params['id'])

        if (!stockExists)
            this.router.navigate(['/404'])
        return stockExists
    }
}