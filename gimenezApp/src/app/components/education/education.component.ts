import { education } from './../../model/education.model';
import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';
import { EducationService } from 'src/app/service/education.service';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  isLoggedIn = false;
  education : education [] = [] ;
  educationEdit : education;
  linkNew : string;
  nameNew : string;
  startendNew : string;
  descripNew : string;
  

  constructor(private logginService : LoggedService, private serviceEducation : EducationService) { }

  ngOnInit(): void {
    this.loadEducation();
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }

  loadEducation(): void{
    this.serviceEducation.list().subscribe(
      data => { this.education = data; }
    )
  }

  create(): void{
    const newEdu = new education(this.linkNew,this.nameNew,this.startendNew,this.descripNew);
    this.serviceEducation.save(newEdu).subscribe(data => {
      this.loadEducation();
      alert("Educación agregada");
      
    },err =>{
      alert("No se pudo crear");
    }
    )
  }

  delete(id?: number){
    if(id !=undefined){
      this.serviceEducation.delete(id).subscribe(
        data => { this.loadEducation();
        }, err =>{
          alert("No se eliminó")
        }
        
      )
    }
  }
}
