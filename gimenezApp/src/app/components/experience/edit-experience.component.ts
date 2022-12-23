import { ExperienceService } from './../../service/experience.service';
import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/model/experience.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  experience : experience = null;

  constructor(private serviceExperience : ExperienceService,private activatedRouter : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      const id = params['id'];
      this.serviceExperience.detail(id).subscribe(
        data =>{
          this.experience = data;
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
      this.serviceExperience.update(id, this.experience).subscribe(
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
