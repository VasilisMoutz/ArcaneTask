import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameOverview } from '../../../model/GameOverview.model';
import { AbstractBaseComponent } from '../../components/AbstractBaseComponent';

@Component({
  selector: 'app-game-overview',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './game-overview.component.html',
  styleUrl: './game-overview.component.scss',
})
export class GameOverviewComponent extends AbstractBaseComponent {
  games: GameOverview[] = [
    {
      id: 1,
      title: 'Game 1',
      description: 'This is a game',
      icon: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      title: 'Game 2',
      description: 'This is a game',
      icon: 'https://picsum.photos/200/300',
    },
  ];
}
