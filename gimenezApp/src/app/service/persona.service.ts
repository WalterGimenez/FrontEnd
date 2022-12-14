import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  /*URL2 = 'http://localhost:8080/personas/';
  URL = 'https://walter-waltergimenez.koyeb.app/personas/';*/
  URL = 'https://wgimenez.onrender.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable <persona>{
    return this.http.get<persona>(this.URL + 'informe');
  }
}
