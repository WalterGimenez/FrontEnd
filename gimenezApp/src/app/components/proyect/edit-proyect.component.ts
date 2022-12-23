import { proyect } from './../../model/proyect.model';
import { Component, OnInit } from '@angular/core';
import { ProyectService } from 'src/app/service/proyect.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {
  proyect : proyect = null;

  constructor(private proyectService : ProyectService,private activatedRouter : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      const id = params['id'];
      this.proyectService.detail(id).subscribe(
        data =>{
          this.proyect = data;
        }, err =>{
          alert("Error al pasar el id");
          this.router.navigate(['']);
        }
      )
    });

  }


  update(): void{
    this.activatedRouter.params.subscribe(params => {
      const id = params['id'];
      this.proyectService.update(id, this.proyect).subscribe(
        data => {
      
          this.router.navigate(['']);
        }, err => {
          alert("Error al querer modificar la educacion");
          this.router.navigate(['']);
        }
      )
    });
  }

  canceled(){
    alert("No se realizaron cambios");
    this.router.navigate(['']);
  }

}
