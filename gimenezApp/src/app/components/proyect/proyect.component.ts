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

  linkNew : string;
  nameNew : string;
  descripNew : string;
  linkproyNew : string;

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

  create(): void{
    const newProy = new proyect(this.linkNew,this.nameNew,this.descripNew,this.linkproyNew);
    this.serviceProyect.save(newProy).subscribe(data => {
      this.loadProyect();
      alert("Proyecto agregado");
      
    },err =>{
      alert("No se pudo crear");
    }
    )
  }

  delete(id?: number){
    if(id !=undefined){
      this.serviceProyect.delete(id).subscribe(
        data => { this.loadProyect();
        }, err =>{
          alert("No se eliminó")
        }
        
      )
    }
  }
}
