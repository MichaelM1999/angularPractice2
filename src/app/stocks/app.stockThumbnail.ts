import { Component, Input } from '@angular/core'

@Component({
    selector: 'stock-thumbnail',
    templateUrl: './app.stockThumbnail.html'
})
export class StockThumbnailComponent{
    @Input() Stock:any
}