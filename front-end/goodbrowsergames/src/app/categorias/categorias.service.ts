import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  API_URL = 'https://goodbrowsergames-ffhl-final.herokuapp.com';
  //API_URL = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get<any[]>(`${this.API_URL}/api/categorias`);
  }

  getCategoriaById(id: any){
    return this.http.get<any>(`${this.API_URL}/api/categorias/${id}`);
  }

  saveCategoria(categoria: any){
    return this.http.post<any>(`${this.API_URL}/api/categorias`, categoria);

  }

  updateCategoria(id: any, categoria: any){
    return this.http.put<any>(`${this.API_URL}/api/categorias/${id}`, categoria);
  }

  deleteCategoria(id: any){
    return this.http.delete<any>(`${this.API_URL}/api/categorias/${id}`);
  }

}
