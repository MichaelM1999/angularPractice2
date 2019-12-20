import { Component } from '@angular/core';
import { Navbar } from './nav/app.navbar';


@Component({
  selector: 'app-root',
  template: `
  <Navbar></Navbar>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'ng-firstapp';
}
