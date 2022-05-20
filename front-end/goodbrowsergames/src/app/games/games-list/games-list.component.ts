import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  games: any[] = [];
  id: any;

  constructor(
    private gamesService: GamesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gamesService.getGames()
      .subscribe(
        res => {
          this.games = res;
        }
      )
  }

  openModalDelete(id: any) {
    this.id = id;
  }

  delete() {
    this.gamesService.deleteGame(this.id)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        }
      );
  }

}

