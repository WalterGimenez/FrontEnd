import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  private isLoggedNow  = new BehaviorSubject<boolean>(false);

  //Obsevable para el login
  login$ = this.isLoggedNow.asObservable();

  constructor() {}
  

 
  public setIsLoggedNow(state: boolean){
    this.isLoggedNow.next(state);
  }
}
