import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { AvaliacoesMaisUteisComponent } from './avaliacoes-mais-uteis/avaliacoes-mais-uteis.component';
import { HttpClientModule } from '@angular/common/http';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AvaliacoesMaisUteisComponent,
    RelatoriosComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RelatoriosModule { }
