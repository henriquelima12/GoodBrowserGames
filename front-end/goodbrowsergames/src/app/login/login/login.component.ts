import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembrosService } from 'src/app/membros/membros.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String = '';
  password: String = '';
  sended: boolean = false;
  incorrect: boolean = false;

  constructor(
    private membrosService: MembrosService,
    private router: Router,
    private authService : AuthService 
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem('usuario', JSON.stringify(null));
  }

  signin() {
    this.sended = true;
    if (this.validForm()) {
      this.authService.fazerLogin(this.username, this.password);
      this.authService.incorrect
        .subscribe(
          res => this.incorrect = res
        );
    }
  }

  verifyField(field: any): boolean {
    if (field == null || field == '' || field == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validForm(): boolean {
    let valid: boolean = true;
    if (!this.verifyField(this.username) || !this.verifyField(this.password)) {
      valid = false;
    }
    return valid;
  }

}
