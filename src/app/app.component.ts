import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  links: Route[];

  private static readonly DARK_THEME_LIGHT = 'light';

  constructor(private router: Router) {
    this.links = this.router.config.filter((route) => {
      return route.path !== '' && !route.path?.includes('/');
    });
  }

  login() {}

  openSideNav() {}

  print() {}
}
