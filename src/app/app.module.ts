import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StockThumbnailComponent } from './stocks/app.stockThumbnail';
import { StockListComponent } from './stocks/app.stocklist';
import { StockService } from './stocks/shared/stock.service';
import { StockDetailsComponent} from './stock-details/app.stockdetails';
import { appRoutes } from './routes'
import { Router, RouterModule } from '@angular/router';
import { Navbar } from './nav/app.navbar';
import { Error404Component } from './errors/app.404component';
import { StockRouteActivator } from './stock-details/stock-details.activator.service';
import { AboutPage } from './about/app.about-component';
import { ContactPage } from './contact/app.contact-component';
import { LoginPage } from './users/user.login';
import { AccountPage } from './account/account';
import { HomeComponent } from './home/home.component';
import { Ticker } from './ticker/ticker'

import { stockSearch } from './services/api.stock';
import { BackendHook } from './services/api.backendhook';

@NgModule({
  declarations: [
    AppComponent,
    StockThumbnailComponent,
    StockListComponent,
    StockDetailsComponent,
    Navbar,
    AccountPage,
    Error404Component,
    AboutPage,
    ContactPage,
    LoginPage,
    HomeComponent,
    Ticker,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StockService,
    stockSearch,
    BackendHook,
    StockRouteActivator,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
