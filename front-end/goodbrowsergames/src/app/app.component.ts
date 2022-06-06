import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { CategoriasService } from './categorias/categorias.service';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome: string = '';
  //categorias: any[] = ['Strategy', 'Shooter', 'Puzzle', 'Arcade', 'Role Playing Game (RPG)', 'Sports', 'Action', 'Adventure'];
  categorias: any[] = [];
  mostrarMenu: boolean = JSON.parse(sessionStorage.getItem('autenticado'));
  user = {
    id: '',
    nome: '',
    username: '',
    senha: '',
    dataNascimento: '',
    estado: '',
    pais: ''
  };
  idUser = JSON.parse(sessionStorage.getItem('idUser'));
  recomendacoes = 'recomendacoes';
  admin: boolean;

  constructor(
    private authService: AuthService,
    private categoriasService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute) {
    if (this.mostrarMenu) {
      this.user = JSON.parse(sessionStorage.getItem('usuario'));
    }
    if (this.user.username == 'admin') {
      sessionStorage.setItem('admin', JSON.stringify(true));
    } else {
      sessionStorage.setItem('admin', JSON.stringify(false));
    }
    this.admin = JSON.parse(sessionStorage.getItem('admin'));
  }

  ngOnInit() {
    this.authService.showMenu.subscribe(
      res => this.mostrarMenu = res
    );

    this.authService.admin.subscribe(
      res => this.admin = res
    );

    this.categoriasService.getCategorias().subscribe(
      res => this.categorias = res
    );
  }

  updateCadastro() {
    this.idUser = JSON.parse(sessionStorage.getItem('idUser'));
    this.router.navigate(['/membros', this.idUser]);
  }

  sair() {
    sessionStorage.setItem('usuario', JSON.stringify(null));
    sessionStorage.setItem('autenticado', JSON.stringify(false));
    sessionStorage.setItem('idUser', JSON.stringify(null));
    sessionStorage.setItem('admin', JSON.stringify(false));
    window.location.reload();
  }
}
