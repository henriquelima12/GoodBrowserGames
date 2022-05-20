import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';


@NgModule({
  declarations: [
    CategoriasFormComponent,
    CategoriasListComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CategoriasModule { }
