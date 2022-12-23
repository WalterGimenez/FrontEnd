import { experience } from './../../model/experience.model';
import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  isLoggedIn = false;
  experience: experience[] = [];

  nameNew : string;
  startendNew : string;
  linkNew : string;
  jobNew : string;
  descripNew : string;

  constructor(private logginService : LoggedService, private serviceExperience : ExperienceService) { }

  ngOnInit(): void {
    this.loadExperience();
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }

  loadExperience(): void{
    this.serviceExperience.list().subscribe(
      data => {this.experience = data}
    )
  }

  create(): void{
    const newEdu = new experience(this.nameNew,this.startendNew,this.linkNew,this.jobNew,this.descripNew);
    this.serviceExperience.save(newEdu).subscribe(data => {
      this.loadExperience();
      alert("Experiencia agregada");
      
    },err =>{
      alert("No se pudo crear");
    }
    )
  }

  delete(id?: number){
    if(id !=undefined){
      this.serviceExperience.delete(id).subscribe(
        data => { this.loadExperience();
        }, err =>{
          alert("No se eliminó")
        }
        
      )
    }
  }
}
