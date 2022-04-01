import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get<any[]>(`https://goodbrowsergames-ffhl.herokuapp.com/api/games`);
  }

  getGamesByNome(nome: any){
    return this.http.get<any[]>(`https://goodbrowsergames-ffhl.herokuapp.com/api/games/nome?nome=${nome}`);
  }

  getGamesByCategoria(categoria: any){
    return this.http.get<any[]>(`https://goodbrowsergames-ffhl.herokuapp.com/api/games/categoria?categoria=${categoria}`);
  }

  getGameById(id: any){
    return this.http.get<any>(`https://goodbrowsergames-ffhl.herokuapp.com/api/games/${id}`);
  }

  saveGame(game: any){
    return this.http.post<any>(`https://goodbrowsergames-ffhl.herokuapp.com/api/games`, game);
  }

  updateGame(id: any, game: any){
    return this.http.put<any>(`https://goodbrowsergames-ffhl.herokuapp.com/api/games/${id}`, game);
  }

  deleteGame(id: any){
    return this.http.delete<any>(`https://goodbrowsergames-ffhl.herokuapp.com/api/games/${id}`);
  }

}
