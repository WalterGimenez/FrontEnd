import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  isLoggedIn = false;

  constructor(private logginService : LoggedService) { }


  ngOnInit(): void {
   
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }


}
