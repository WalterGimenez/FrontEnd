import { ProyectService } from './../../service/proyect.service';
import { proyect } from './../../model/proyect.model';
import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  isLoggedIn = false;
  proyect : proyect [] = [];

  constructor(private logginService : LoggedService, private serviceProyect : ProyectService) { }


  ngOnInit(): void {
    this.loadProyect();
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }


  loadProyect(): void{
    this.serviceProyect.list().subscribe(
      data => { this.proyect = data; }
    )
  }
}
