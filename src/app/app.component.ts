import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HubConnectionService } from './Services/HubService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _router: Router, private service: HubConnectionService) {

  }

  ngOnInit() {
   // this.service.update();

    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
   

  }
}
