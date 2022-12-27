import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  /*URL = 'http://localhost:8080/education';*/
  URL = 'https://wg-app.onrender.com/education';


  constructor(private httpClient : HttpClient) { }

  public list() : Observable<education[]>{
    return this.httpClient.get<education []>(this.URL + '/list');
  }

  public detail(id : number) : Observable<education>{
    return this.httpClient.get<education>(this.URL + `/detail/${id}`); //se tuvo que usar las comillas que van a la izq. porque se le pasa el id, si no, no lo toma
  }

  public save(experiencia: education): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', experiencia);
  }

  public update(id: number, education: education): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, education);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
