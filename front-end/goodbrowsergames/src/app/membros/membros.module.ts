import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembrosRoutingModule } from './membros-routing.module';
import { MembrosListComponent } from './membros-list/membros-list.component';
import { MembrosFormComponent } from './membros-form/membros-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MembrosListComponent,
    MembrosFormComponent
  ],
  imports: [
    CommonModule,
    MembrosRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MembrosModule { }
