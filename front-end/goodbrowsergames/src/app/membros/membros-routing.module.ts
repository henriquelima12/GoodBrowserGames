import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembrosFormComponent } from './membros-form/membros-form.component';
import { MembrosListComponent } from './membros-list/membros-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: MembrosListComponent
  },
  {
    path: 'novo',
    component: MembrosFormComponent
  },
  {
    path: ':id',
    component: MembrosFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembrosRoutingModule { }
