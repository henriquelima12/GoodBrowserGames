import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembrosService } from '../membros.service';

@Component({
  selector: 'app-membros-list',
  templateUrl: './membros-list.component.html',
  styleUrls: ['./membros-list.component.scss']
})
export class MembrosListComponent implements OnInit {

  membros: any[] = [];
  id: any;

  constructor(
    private membrosService: MembrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.membrosService.getMembros()
      .subscribe(
        res => {
          this.membros = res;
        }
      )
  }

  openModalDelete(id: any) {
    this.id = id;
  }

  delete() {
    this.membrosService.deleteMembro(this.id)
      .subscribe(
        res => {
          this.router.navigate(['/']);
        }
      );
  }

}
