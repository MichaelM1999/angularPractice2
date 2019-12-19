import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StockThumbnailComponent } from './stocks/app.stockThumbnail';
import { StockListComponent } from './stocks/app.stocklist';
import { StockService } from './stocks/shared/stock.service';
import { StockDetailsComponent} from './stock-details/app.stockdetails';
import { appRoutes } from './routes'
import { Router, RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    StockThumbnailComponent,
    StockListComponent,
    StockDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
