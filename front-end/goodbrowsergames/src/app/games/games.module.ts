import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GamesComponent } from './games/games.component';
import { GamesFormComponent } from './games-form/games-form.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesRoutingModule } from './games-routing.module';



@NgModule({
  declarations: [
    GamesComponent,
    GamesFormComponent,
    GamesListComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class GamesModule { }
