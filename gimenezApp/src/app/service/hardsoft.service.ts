import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hardsoft } from '../model/hardsoft.model';

@Injectable({
  providedIn: 'root'
})
export class HardSoftService {
  URL = 'http://localhost:8080/hys'

  constructor(private httpClient : HttpClient) {}

  public list() : Observable<hardsoft[]>{
    return this.httpClient.get<hardsoft []>(this.URL + '/list');
  }

  public detail(id : number) : Observable<hardsoft>{
    return this.httpClient.get<hardsoft>(this.URL + `/detail/${id}`); //se tuvo que usar las comillas que van a la izq. porque se le pasa el id, si no, no lo toma
  }

  public save(hardsoft: hardsoft): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', hardsoft);
  }

  public update(id: number, hardsoft: hardsoft): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, hardsoft);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
