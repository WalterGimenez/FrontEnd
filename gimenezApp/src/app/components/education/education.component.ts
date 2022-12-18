import { education } from './../../model/education.model';
import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  isLoggedIn = false;
  education : education [] = []; 

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

  

  delet(id?: number){
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
