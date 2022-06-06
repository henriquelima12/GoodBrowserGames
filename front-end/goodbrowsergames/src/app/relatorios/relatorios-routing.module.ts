import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaliacoesMaisUteisComponent } from './avaliacoes-mais-uteis/avaliacoes-mais-uteis.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';

const routes: Routes = [
  {
    path: '',
    component: RelatoriosComponent
  },
  {
    path: 'avaliacoes-mais-uteis',
    component: AvaliacoesMaisUteisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
