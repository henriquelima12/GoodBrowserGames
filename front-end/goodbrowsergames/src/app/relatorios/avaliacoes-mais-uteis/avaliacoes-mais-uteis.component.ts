import { Component, OnInit } from '@angular/core';
import { RelatoriosService } from '../relatorios.service';

@Component({
  selector: 'app-avaliacoes-mais-uteis',
  templateUrl: './avaliacoes-mais-uteis.component.html',
  styleUrls: ['./avaliacoes-mais-uteis.component.scss']
})
export class AvaliacoesMaisUteisComponent implements OnInit {

  avaliacoes: any[] = [];

  constructor(
    private relatoriosService: RelatoriosService
  ) { }

  ngOnInit(): void {
    this.relatoriosService.getAvaliacoesMaisUteis()
      .subscribe(
        res => {
          this.avaliacoes = res
        }
      );
  }

}
