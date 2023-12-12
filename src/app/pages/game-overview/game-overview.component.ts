import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameOverview } from '../../../model/GameOverview.model';
import { AbstractBaseComponent } from '../../components/AbstractBaseComponent';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-game-overview',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatPaginatorModule],
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
    // Add more games here
    {
      id: 3,
      title: 'Game 3',
      description: 'This is a game',
      icon: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      title: 'Game 4',
      description: 'This is a game',
      icon: 'https://picsum.photos/200/300',
    },

    {
      id: 5,
      title: 'World of Warcraft',
      description:
        'World of Warcraft ist ein Massively Multiplayer Online Role-Playing Game (MMORPG), das von Blizzard Entertainment entwickelt wurde. Es spielt in der fiktiven Welt von Azeroth und bietet den Spielern eine Vielzahl von Abenteuern, Quests und PvP-Kämpfen.',
      icon: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      title: 'The Legend of Zelda: Breath of the Wild',
      description:
        'The Legend of Zelda: Breath of the Wild ist ein Action-Adventure-Spiel, das von Nintendo entwickelt wurde. Es spielt in einer offenen Welt und bietet den Spielern die Möglichkeit, verschiedene Rätsel zu lösen, Dungeons zu erkunden und gegen mächtige Bosse zu kämpfen.',
      icon: 'https://picsum.photos/200/300',
    },
    {
      id: 54,
      title: 'Final Fantasy XIV',
      description:
        'Final Fantasy XIV ist ein MMORPG, das von Square Enix entwickelt wurde. Es spielt in der Welt von Eorzea und bietet den Spielern eine epische Geschichte, herausfordernde Dungeons und Raids sowie ein komplexes Klassensystem.',
      icon: 'https://picsum.photos/200/300',
    },
    
    ];

    constructor() {
      super();
      this.generateGameEntries();
    }

    private generateGameEntries(): void {
      for (let i = 7; i <= 36; i++) {
        this.games.push({
          id: i,
          title: `Game ${i}`,
          description: 'This is a game',
          icon: 'https://picsum.photos/200/300',
        });
      }
    }
  }
