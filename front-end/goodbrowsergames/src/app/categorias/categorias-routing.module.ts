import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CategoriasListComponent
  },
  {
    path: 'novo',
    component: CategoriasFormComponent
  },
  {
    path: ':id',
    component: CategoriasFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
