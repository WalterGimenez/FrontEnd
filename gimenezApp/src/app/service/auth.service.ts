import { Observable } from 'rxjs';
import { NewUser } from './../model/new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../model/user-login';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /*URL ='http://localhost:8080/auth/';*/
  URL ='https://walter-waltergimenez.koyeb.app/education/auth/';  

  constructor(private httpClient : HttpClient) { }

  public nuevo(userNew : NewUser): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo', userNew);
  }

  public login(userLogin: UserLogin): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', userLogin);
  }
}
