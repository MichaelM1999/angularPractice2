import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockThumbnailComponent } from './stocks/app.stockThumbnail';
import { StockListComponent } from './stocks/app.stocklist';
import { StockService } from './stocks/shared/stock.service';
import { StockDetailsComponent} from './stock-details/app.stockdetails';
import { appRoutes } from './routes'
import { Router, RouterModule } from '@angular/router';
import { Navbar } from './nav/app.navbar';
import { Error404Component } from './errors/app.404component';
import { StockRouteActivator } from './stock-details/stock-details.activator.service'
@NgModule({
  declarations: [
    AppComponent,
    StockThumbnailComponent,
    StockListComponent,
    StockDetailsComponent,
    Navbar,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StockService,
    StockRouteActivator,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
