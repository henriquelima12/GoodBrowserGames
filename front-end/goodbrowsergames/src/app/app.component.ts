import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome: string = '';
  categorias: any[] = ['Strategy', 'Shooter', 'Puzzle', 'Arcade', 'Role Playing Game (RPG)', 'Sports', 'Action', 'Adventure'];
}
