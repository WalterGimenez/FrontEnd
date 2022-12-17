import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyect } from '../model/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {
  URL = 'http://localhost:8080/proyect'

  constructor(private httpClient : HttpClient) {}

  public list() : Observable<proyect[]>{
    return this.httpClient.get<proyect []>(this.URL + '/list');
  }

  public detail(id : number) : Observable<proyect>{
    return this.httpClient.get<proyect>(this.URL + `/detail/${id}`); //se tuvo que usar las comillas que van a la izq. porque se le pasa el id, si no, no lo toma
  }

  public save(proyect: proyect): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', proyect);
  }

  public update(id: number, proyect: proyect): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, proyect);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
