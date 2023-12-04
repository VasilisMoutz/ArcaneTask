import { RouterModule, Routes } from '@angular/router';
import { GameOverviewComponent } from './pages/game-overview/game-overview.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
    data: { icon: 'home' },
  },
  {
    path: 'games',
    component: GameOverviewComponent,
    title: 'Games',
    data: { icon: 'games' },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile',
    data: { icon: 'account_circle' },
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
