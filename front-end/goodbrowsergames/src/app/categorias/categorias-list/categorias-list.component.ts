import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {

  categorias: any[] = [];
  id: any;

  constructor(
    private categoriasService: CategoriasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriasService.getCategorias()
      .subscribe(
        res => {
          this.categorias = res;
        }
      )
  }

  openModalDelete(id: any) {
    this.id = id;
  }

  delete() {
    this.categoriasService.deleteCategoria(this.id)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        }
      );
  }

}
