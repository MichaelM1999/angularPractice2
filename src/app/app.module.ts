import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockThumbnailComponent } from './stocks/app.stockThumbnail';
import { StockListComponent } from './stocks/app.stocklist';
import { stocksbtns } from './stocks/app.stockbtns';

@NgModule({
  declarations: [
    AppComponent,
    StockThumbnailComponent,
    StockListComponent,
    stocksbtns
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
