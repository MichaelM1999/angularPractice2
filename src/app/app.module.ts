import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockThumbnailComponent } from './stocks/app.stockThumbnail';
import { StockListComponent } from './stocks/app.stocklist';

@NgModule({
  declarations: [
    AppComponent,
    StockThumbnailComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
