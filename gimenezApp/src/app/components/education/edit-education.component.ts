import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  education : education = null;
  
  constructor( private serviceEducation : EducationService ,private activatedRouter : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      const id = params['id'];
      this.serviceEducation.detail(id).subscribe(
        data =>{
          this.education = data;
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
      this.serviceEducation.update(id, this.education).subscribe(
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
