import { Routes } from '@angular/router'
import { StockListComponent } from './stocks/app.stocklist'
import { StockDetailsComponent } from './stock-details/app.stockdetails'
import { Error404Component } from './errors/app.404component'
import { StockRouteActivator } from './stock-details/stock-details.activator.service'
import{ AboutPage } from './about/app.about-component'
import { ContactPage } from './contact/app.contact-component'
import { LoginPage } from './users/user.login'

export const appRoutes:Routes = [
    { path: 'stocks', component: StockListComponent},
    { path: 'stocks/:id', component: StockDetailsComponent,
        canActivate: [StockRouteActivator] },
    { path: 'about', component: AboutPage},
    { path: 'login', component: LoginPage},
    { path: 'contact', component: ContactPage},
    { path: '', redirectTo: '/stocks', pathMatch: 'full'},
    { path: '404', component: Error404Component }
]