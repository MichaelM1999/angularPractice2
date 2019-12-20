import { Routes } from '@angular/router'
import { StockListComponent } from './stocks/app.stocklist'
import { StockDetailsComponent } from './stock-details/app.stockdetails'
import { Error404Component } from './errors/app.404component'
import { StockRouteActivator } from './stock-details/stock-details.activator.service'
export const appRoutes:Routes = [
    { path: 'stocks', component: StockListComponent},
    { path: 'stocks/:id', component: StockDetailsComponent,
        canActivate: [StockRouteActivator] },
    { path: '', redirectTo: '/stocks', pathMatch: 'full'},
    { path: '404', component: Error404Component }
]