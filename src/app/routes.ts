import { Routes } from '@angular/router'
import { StockListComponent } from './stocks/app.stocklist'
import { StockDetailsComponent } from './stock-details/app.stockdetails'
import { Error404Component } from './errors/app.404component'
import { AboutPage } from './about/app.about-component'
import { ContactPage } from './contact/app.contact-component'
import { LoginPage } from './users/user.login'
import { HomeComponent } from './home/home.component'
import { AccountPage } from './account/account'

export const appRoutes:Routes = [
    { path: 'stocks', component: StockListComponent},
    { path: 'stocks/:name', component: StockDetailsComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutPage},
    { path: 'account', component: AccountPage},
    { path: 'login', component: LoginPage},
    { path: 'contact', component: ContactPage},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: '404', component: Error404Component }
]