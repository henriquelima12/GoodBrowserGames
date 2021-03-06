import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-form',
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.scss']
})
export class GamesFormComponent implements OnInit {

  game = {
    nome: '',
    categoria: '',
    urlAcesso: '',
    urlVideo: '',
    descricao: '',
    imagem: ''
  };
  idGame: any;
  img: any;
  sended: boolean = false;
  title: string = '';
  showEdit: boolean;
  categorias: any[] = [];

  constructor(
    private gamesService: GamesService,
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.idGame = params['id'];
        this.gamesService.getGameById(this.idGame)
          .subscribe(
            res => {
              this.game = res;
              this.img = this.game.imagem;
              this.title = 'Editar game';
              this.showEdit = true;
            },
            err => {
              this.title = 'Novo game';
              this.showEdit = false;
            }
          );
      }
    );

    this.categoriasService.getCategorias().subscribe(
      res => this.categorias = res
    );
  }

  save() {
    this.sended = true;
    this.game.imagem = this.img;
    if (this.validForm()) {
      this.gamesService.saveGame(this.game)
        .subscribe(
          res => {
            this.router.navigate(['games']);
          }
        );
    }
  }

  update(id: any) {
    this.sended = true;
    this.game.imagem = this.img;
    if (this.validForm()) {
      this.gamesService.updateGame(id, this.game)
        .subscribe(
          res => {
            this.router.navigate(['']);
          }
        );
    }
  }

  readFile(event: any) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.img = reader.result;
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
    if (!this.verifyField(this.game.nome) || !this.verifyField(this.game.categoria) || !this.verifyField(this.game.urlAcesso) ||
      !this.verifyField(this.game.descricao) || !this.verifyField(this.img)) {
      valid = false;
    }
    return valid;
  }

}

