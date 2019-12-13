import { Component, Input } from '@angular/core'

@Component({
    selector: 'stocksbtns',
    templateUrl:'./app.stockbtns.html'
})
export class stocksbtns{
    @Input() Stock:any
}