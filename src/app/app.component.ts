import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  links: Route[];

  constructor(private router: Router) {
    this.links = this.router.config;
  }

  login() {}

  openSideNav() {}

  print() {}
}
