import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { experience } from '../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  /*URL2 = 'http://localhost:8080/exper';
  URL = 'https://walter-waltergimenez.koyeb.app/exper';*/
  URL = 'https://wgimenez.onrender.com/exper';

  constructor(private httpClient : HttpClient) { }

  public list() : Observable<experience[]>{
    return this.httpClient.get<experience []>(this.URL + '/list');
  }

  public detail(id : number) : Observable<experience>{
    return this.httpClient.get<experience>(this.URL + `/detail/${id}`); //se tuvo que usar las comillas que van a la izq. porque se le pasa el id, si no, no lo toma
  }

  public save(experiencia: experience): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', experiencia);
  }

  public update(id: number, experiencia: experience): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
