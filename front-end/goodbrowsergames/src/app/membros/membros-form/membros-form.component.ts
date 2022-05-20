import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembrosService } from '../membros.service';

@Component({
  selector: 'app-membros-form',
  templateUrl: './membros-form.component.html',
  styleUrls: ['./membros-form.component.scss']
})
export class MembrosFormComponent implements OnInit {

  membro = {
    nome: '',
    username: '',
    senha: '',
    dataNascimento: '',
    estado: '',
    pais: ''
  };
  idMembro: any;
  sended: boolean = false;
  title: string = '';
  showEdit: boolean;

  constructor(
    private membrosService: MembrosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.idMembro = params['id'];
        this.membrosService.getMembroById(this.idMembro)
          .subscribe(
            res => {
              this.membro = res;
              this.title = 'Editar membro';
              this.showEdit = true;
            },
            err => {
              this.title = 'Novo membro';
              this.showEdit = false;
            }
          );
      }
    );
  }

  save() {
    this.sended = true;
    if (this.validForm()) {
      this.membrosService.saveMembro(this.membro)
        .subscribe(
          res => {
            this.router.navigate(['games']);
          }
        );
    }
  }

  update(id: any) {
    this.sended = true;
    if (this.validForm()) {
      this.membrosService.updateMembro(id, this.membro)
        .subscribe(
          res => {
            this.router.navigate(['']);
          }
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
    if (!this.verifyField(this.membro.nome) || !this.verifyField(this.membro.username) || !this.verifyField(this.membro.senha) ||
      !this.verifyField(this.membro.dataNascimento) || !this.verifyField(this.membro.estado) || !this.verifyField(this.membro.pais)) {
      valid = false;
    }
    return valid;
  }

}
