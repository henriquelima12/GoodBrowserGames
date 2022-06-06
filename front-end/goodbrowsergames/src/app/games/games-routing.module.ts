import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatoriosComponent } from '../relatorios/relatorios/relatorios.component';
import { EditAvaliacaoComponent } from './edit-avaliacao/edit-avaliacao.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GamesFormComponent } from './games-form/games-form.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
    {
        path: '',
        component: GamesComponent
    },
    {
        path: 'nome/:nome',
        component: GamesComponent
    },
    {
        path: 'categoria/:categoria',
        component: GamesComponent
    },
    {
        path: 'list',
        component: GamesListComponent
    },
    {
        path: 'novo',
        component: GamesFormComponent
    },
    {
        path: ':id',
        component: GamesFormComponent
    },
    {
        path: 'gamepage/:id',
        component: GamePageComponent
    },
    {
        path: 'recomendacoes/:recomendacoes',
        component: GamesComponent
    },
    {
        path: 'editavaliacao/:id',
        component: EditAvaliacaoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GamesRoutingModule { }