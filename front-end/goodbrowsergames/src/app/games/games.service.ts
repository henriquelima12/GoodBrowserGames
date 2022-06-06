import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URL = 'https://goodbrowsergames-ffhl-final.herokuapp.com';
  //API_URL = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get<any[]>(`${this.API_URL}/api/games`);
  }

  getGamesByNome(nome: any){
    return this.http.get<any[]>(`${this.API_URL}/api/games/nome?nome=${nome}`);
  }

  getGamesByCategoria(categoria: any){
    return this.http.get<any[]>(`${this.API_URL}/api/games/categoria?categoria=${categoria}`);
  }

  getGameById(id: any){
    return this.http.get<any>(`${this.API_URL}/api/games/${id}`);
  }

  saveAvaliacao(avaliacao: any) {
    return this.http.post<any>(`${this.API_URL}/api/avaliacoes`, avaliacao);
  }

  updateAvaliacao(id: any, avaliacao: any, ) {
    return this.http.put<any>(`${this.API_URL}/api/avaliacoes/${id}`, avaliacao);
  }

  getAvaliacoesByIdGame(id: any){
    return this.http.get<any>(`${this.API_URL}/api/avaliacoesbygame?idGame=${id}`);
  }

  getAvaliacaoById(id: any) {
    return this.http.get<any>(`${this.API_URL}/api/avaliacoes/${id}`);
  }

  saveGame(game: any){
    return this.http.post<any>(`${this.API_URL}/api/games`, game);
  }

  updateGame(id: any, game: any){
    return this.http.put<any>(`${this.API_URL}/api/games/${id}`, game);
  }

  deleteGame(id: any){
    return this.http.delete<any>(`${this.API_URL}/api/games/${id}`);
  }

  saveAvaliacaoUtil(avaliacaoUtil: any) {
    return this.http.post<any>(`${this.API_URL}/api/avaliacaoutil`, avaliacaoUtil);
  }

  deleteAvaliacaoUtil(id: any) {
    return this.http.delete<any>(`${this.API_URL}/api/avaliacaoUtil/${id}`);
  }

  getRecomendacoes(id: any){
    return this.http.get<any>(`${this.API_URL}/api/games/recomendacoes?idMembro=${id}`);
  }

}
