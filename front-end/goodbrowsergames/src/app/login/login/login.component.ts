import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembrosService } from 'src/app/membros/membros.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password: String = '';

  constructor(
    private membrosService: MembrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem('usuario', JSON.stringify(null));
  }

  signin() {
    this.membrosService.getMembros()
      .subscribe(
        res => {
          for (let i = 0; i < res.length; i++) {
            if ((this.username == res[i].username) && (this.password == res[i].senha)) {
              sessionStorage.setItem('usuario', JSON.stringify(res[i]));
              this.router.navigate(['games']);
            }
          }
        }
      )
  }

}
