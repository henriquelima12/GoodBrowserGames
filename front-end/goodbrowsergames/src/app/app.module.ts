import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesModule } from './games/games.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MembrosModule } from './membros/membros.module';
import { LoginModule } from './login/login.module';
import { RelatoriosModule } from './relatorios/relatorios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesModule,
    CategoriasModule,
    MembrosModule,
    LoginModule,
    RelatoriosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
