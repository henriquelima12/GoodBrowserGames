import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

   API_URL = 'https://goodbrowsergames-ffhl-final.herokuapp.com';
   //API_URL = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getMembros(){
    return this.http.get<any[]>(`${this.API_URL}/api/membros`);
  }

  getMembroById(id: any){
    return this.http.get<any>(`${this.API_URL}/api/membros/${id}`);
  }

  saveMembro(membro: any){
    return this.http.post<any>(`${this.API_URL}/api/membros`, membro);
  }

  updateMembro(id: any, membro: any){
    return this.http.put<any>(`${this.API_URL}/api/membros/${id}`, membro);
  }

  deleteMembro(id: any){
    return this.http.delete<any>(`${this.API_URL}/api/membros/${id}`);
  }

}
