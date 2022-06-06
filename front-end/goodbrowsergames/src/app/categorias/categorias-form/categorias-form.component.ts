import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.scss']
})
export class CategoriasFormComponent implements OnInit {

  categoria = {
    nome: ''
  };
  idCategoria: any;
  sended: boolean = false;
  title: string = '';
  showEdit: boolean;
  sendCategories = new EventEmitter<boolean>();

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.idCategoria = params['id'];
        this.categoriasService.getCategoriaById(this.idCategoria)
          .subscribe(
            res => {
              this.categoria = res;
              this.title = 'Editar categoria';
              this.showEdit = true;
            },
            err => {
              this.title = 'Nova categoria';
              this.showEdit = false;
            }
          );
      }
    );
  }

  save() {
    this.sended = true;
    if (this.validForm()) {
      this.categoriasService.saveCategoria(this.categoria)
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
      this.categoriasService.updateCategoria(id, this.categoria)
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
    if (!this.verifyField(this.categoria.nome)) {
      valid = false;
    }
    return valid;
  }

}
