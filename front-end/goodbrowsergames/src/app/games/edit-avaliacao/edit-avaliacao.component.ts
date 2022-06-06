import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-edit-avaliacao',
  templateUrl: './edit-avaliacao.component.html',
  styleUrls: ['./edit-avaliacao.component.scss']
})
export class EditAvaliacaoComponent implements OnInit {

  idAvaliacao: any;
  avaliacao: any = {
    id: '',
    estrelas: '',
    texto: '',
    idMembro: '',
    idGame: '',
    dataAvaliacao: ''
  };
  sended: boolean = false;
  idUser = JSON.parse(sessionStorage.getItem('idUser'));
  idGameSend = JSON.parse(sessionStorage.getItem('idGame'));

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.idAvaliacao = params['id'];
        this.gamesService.getAvaliacaoById(this.idAvaliacao)
          .subscribe(
            res => {
              this.avaliacao = res;
            }
          );
      }
    );
  }

  update(id: any) {
    this.sended = true;
    this.avaliacao.idMembro = this.idUser;
    this.avaliacao.idGame = this.idGameSend;
    this.avaliacao.dataAvaliacao = new Date();
    if (this.validForm()) {
      this.gamesService.updateAvaliacao(id, this.avaliacao)
        .subscribe(
          res => {
            this.router.navigate(['games/gamepage', this.idGameSend]);
          }
        );
    }
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
    if (!this.verifyField(this.avaliacao.texto) || !this.verifyField(this.avaliacao.estrelas)) {
      valid = false;
    }
    return valid;
  }

}
