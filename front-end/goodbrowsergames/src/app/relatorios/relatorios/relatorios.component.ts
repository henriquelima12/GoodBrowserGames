import { Component, OnInit } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  gamesByAvaliacao: any[] = [];
  membros: any[] = [];
  gamesByNota: any[] = [];
  categorias: any[] = [];
  dataInicial: Date;
  dataFinal: Date;
  tipoRelatorio: any;

  constructor(private relatoriosService: RelatoriosService) { }

  ngOnInit(): void {
  }

  selectRelatorio() {
    if (this.tipoRelatorio == 'gamesByAvaliacoes') {
      this.getGamesMaisAvaliados();
    } else if (this.tipoRelatorio == 'membros') {
      this.getMembrosComMaisAvaliações();
    } else if (this.tipoRelatorio == 'gamesByNotas') {
      this.getGamesComMaiorNota();
    } else if (this.tipoRelatorio == 'categorias') {
      this.getCategoriasComMaisAvaliacoes();
    }
  }

  getGamesMaisAvaliados() {
    this.relatoriosService.getGamesMaisAvaliados()
      .subscribe(
        res => {
          if (res.length < 5) {
            for (let i = 0; i < res.length; i++) {
              this.gamesByAvaliacao.push(res[i])
            }
          } else {
            let i = 0;
            while (i < 5) {
              this.gamesByAvaliacao.push(res[i]);
              i++;
            }
          }
        }
      );
  }

  getMembrosComMaisAvaliações() {
    this.relatoriosService.getMembrosComMaisAvaliacoes()
      .subscribe(
        res => {
          if (res.length < 5) {
            for (let i = 0; i < res.length; i++) {
              this.membros.push(res[i])
            }
          } else {
            let i = 0;
            while (i < 5) {
              this.membros.push(res[i]);
              i++;
            }
          }
        }
      );
  }

  getGamesComMaiorNota() {
    this.relatoriosService.getGamesComMaiorNota()
      .subscribe(
        res => {
          if (res.length < 5) {
            for (let i = 0; i < res.length; i++) {
              this.gamesByNota.push(res[i])
            }
          } else {
            let i = 0;
            while (i < 5) {
              this.gamesByNota.push(res[i]);
              i++;
            }
          }
        }
      );
  }

  getCategoriasComMaisAvaliacoes() {
    this.relatoriosService.getCategoriasComMaisAvaliacoes()
      .subscribe(
        res => {
          if (res.length < 3) {
            for (let i = 0; i < res.length; i++) {
              this.categorias.push(res[i])
            }
          } else {
            let i = 0;
            while (i < 3) {
              this.categorias.push(res[i]);
              i++;
            }
          }
        }
      );
  }

}
