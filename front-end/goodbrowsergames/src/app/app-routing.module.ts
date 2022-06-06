import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'membros',
    loadChildren: () => import('./membros/membros.module').then(m => m.MembrosModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then(m => m.RelatoriosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
