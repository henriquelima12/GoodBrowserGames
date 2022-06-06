import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: any[] = [];
  title: string = '';
  idUser = JSON.parse(sessionStorage.getItem('idUser'));
  categorias: any[] = [];
  recomendacoes = 'recomendacoes';

  constructor(
    private gamesService: GamesService,
    private categoriasService: CategoriasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: any) => {
          if (params['nome']) {
            this.gamesService.getGamesByNome(params['nome'])
              .subscribe(
                res => {
                  if (res.length == 0) {
                    this.games = [];
                    this.title = "Não foram encontrados resultados para a sua pesquisa";
                  } else {
                    this.games = res;
                    this.title = "Resultados para a pesquisa";
                  }
                }
              );
          } else if (params['categoria']) {
            this.gamesService.getGamesByCategoria(params['categoria'])
              .subscribe(
                res => {
                  if (res.length == 0) {
                    this.games = [];
                    this.title = "Não foram encontrados games associados à essa categoria";
                  } else {
                    this.games = res;
                    this.title = `${params['categoria']}`;
                  }
                }
              );
          } else if (params['recomendacoes']) {
            this.title = "Recomendações para você";
            this.gamesService.getRecomendacoes(this.idUser)
              .subscribe(
                res => {
                  if (res.length == 0) {
                    this.games = [];
                    this.title = "Não foram encontradas recomendações para você no momento";
                  } else {
                    this.games = res;
                    this.title = 'Recomendações para você';
                  }
                }
              );
          } else {
            this.gamesService.getGames()
              .subscribe(
                res => this.games = res
              );
          }
        }
      );

    this.categoriasService.getCategorias().subscribe(
      res => this.categorias = res
    );
  }

  setGame(game) {
    sessionStorage.setItem('game', JSON.stringify(game));
    sessionStorage.setItem('idGame', JSON.stringify(game.id));
  }

}
