import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

   API_URL = 'https://goodbrowsergames-ffhl-final.herokuapp.com';
   //API_URL = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getAvaliacoesMaisUteis(){
    return this.http.get<any[]>(`${this.API_URL}/api/avaliacoesmaisuteis`);
  }

  getGamesMaisAvaliados() {
    return this.http.get<any[]>(`${this.API_URL}/api/games/maisavaliados`);
  }

  getMembrosComMaisAvaliacoes() {
    return this.http.get<any[]>(`${this.API_URL}/api/membros/maisavaliacoes`);
  }

  getGamesComMaiorNota() {
    return this.http.get<any[]>(`${this.API_URL}/api/games/maiornota`);
  }

  getCategoriasComMaisAvaliacoes() {
    return this.http.get<any[]>(`${this.API_URL}/api/categorias/maisavaliadas`);
  }
}
