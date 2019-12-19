import { Routes } from '@angular/router'
import { StockListComponent } from './stocks/app.stocklist'
import { StockDetailsComponent } from './stock-details/app.stockdetails'
export const appRoutes:Routes = [
    { path: 'stocks', component: StockListComponent},
    { path: 'stocks/:id', component: StockDetailsComponent },
    { path: '', redirectTo: '/stocks', pathMatch: 'full'}
]