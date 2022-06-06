import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  game: any = {
    id: '',
    nome: '',
    categoria: '',
    urlAcesso: '',
    urlVideo: '',
    descricao: '',
    imagem: ''
  };
  idGame: any;
  avaliac: any = {
    estrelas: '',
    texto: '',
    idMembro: '',
    idGame: '',
    dataAvaliacao: ''
  }
  avaliacaoUtil: any = {
    idAvaliacao: '',
    idMembro: ''
  };
  avaliacoes: any[] = [];
  idUser: number = JSON.parse(sessionStorage.getItem('idUser'));
  idGameSend = JSON.parse(sessionStorage.getItem('idGame'));
  sended: boolean = false;
  showAvaliar: boolean = true;

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
              this.gamesService.getAvaliacoesByIdGame(this.game.id)
                .subscribe(
                  res2 => {
                    this.avaliacoes = res2;
                    console.log(this.avaliacoes)
                    for (let i = 0; i < this.avaliacoes.length; i++) {
                      if (this.avaliacoes[i].idMembro == this.idUser) {
                        break;
                      }
                    }
                  }
                )
            },
            err => {
              console.log(err);
            }
          );
      }
    );
  }

  save() {
    this.sended = true;
    this.avaliac.idMembro = this.idUser;
    this.avaliac.idGame = this.idGameSend;
    this.avaliac.dataAvaliacao = new Date();
    if (this.validForm()) {
      this.gamesService.saveAvaliacao(this.avaliac)
        .subscribe(
          res => {
            this.router.navigate(['']);
          }
        );
    }
  }

  // update(id: any) {
  //   this.sended = true;
  //   this.avaliac.idMembro = this.idUser;
  //   this.avaliac.idGame = this.idGameSend;
  //   this.avaliac.dataAvaliacao = new Date();
  //   console.log(this.avaliac)
  //   if (this.validForm()) {
  //     this.gamesService.updateAvaliacao(id, this.game)
  //       .subscribe(
  //         res => {
  //           this.router.navigate(['']);
  //         }
  //       );
  //   }
  // }

  deleteAvaliacaoUtil(id) {
    this.gamesService.deleteAvaliacaoUtil(id)
      .subscribe(
        res => {
          this.router.navigate([''])
        }
      );
  }

  saveAvaliacaoUtil(idAvaliacao) {
    this.avaliacaoUtil.idAvaliacao = idAvaliacao;
    this.avaliacaoUtil.idMembro = this.idUser;
    this.gamesService.saveAvaliacaoUtil(this.avaliacaoUtil)
      .subscribe(
        res => {
          this.router.navigate(['']);
        }
      );
  }

  verifyField(field: any): boolean {
    if (field == null || field == '' || field == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validForm(): boolean {
    let valid: boolean = true;
    if (!this.verifyField(this.avaliac.estrelas) || !this.verifyField(this.avaliac.texto)) {
      valid = false;
    }
    return valid;
  }

}
