import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  game : any;
  idGame: any;
  avaliacoes: any[] = [];

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.idGame = params['id'];
        this.gamesService.getGameById(this.idGame)
          .subscribe(
            res => {
              this.game = res;
              this.gamesService.getAvaliacoesByIdGame(res.id)
                .subscribe(
                  res2 => {
                    this.avaliacoes = res2;
                    console.log(res2);
                  }
                )
              console.log(this.game);
            },
            err => {
              console.log(err);
            }
          );
      }
    );
  }

}
