import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GameOverviewComponent } from './pages/game-overview/game-overview.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    data: { icon: 'dashboard' },
  },
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
