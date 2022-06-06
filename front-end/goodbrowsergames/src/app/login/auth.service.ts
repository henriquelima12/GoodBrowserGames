import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MembrosService } from '../membros/membros.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = JSON.parse(sessionStorage.getItem('autenticado'));

  showMenu = new EventEmitter<boolean>();
  admin = new EventEmitter<boolean>();
  incorrect = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private membrosService: MembrosService) { 
    }

  fazerLogin(username: String, password: String){
    this.membrosService.getMembros()
      .subscribe(
        res => {
          for (let i = 0; i < res.length; i++) {
            if ((username == res[i].username) && (password == res[i].senha)) {
              sessionStorage.setItem('usuario', JSON.stringify(res[i]));
              sessionStorage.setItem('idUser', res[i].id);
              sessionStorage.setItem('autenticado', JSON.stringify(true));
              this.router.navigate(['games']);
              this.usuarioAutenticado = true;
              //this.showMenu.emit(true);
              if (username == 'admin') {
                //this.admin.emit(true);
                sessionStorage.setItem('admin', JSON.stringify(true));
              } else {
                //this.admin.emit(false);
                sessionStorage.setItem('admin', JSON.stringify(false));
              }
              break;
            } else {
              sessionStorage.setItem('autenticado', JSON.stringify(false));
              this.usuarioAutenticado = false;
              this.incorrect.emit(true);
              //this.showMenu.emit(false);
            }
          }
          this.showMenu.emit(JSON.parse(sessionStorage.getItem('autenticado')));
          this.admin.emit(JSON.parse(sessionStorage.getItem('admin')));
        }
      );
  }

  usuarioIsAutenticado(){
    if (JSON.parse(sessionStorage.getItem('autenticado'))) {
      return true;
    } else {
      return false;
    }
  }

}
