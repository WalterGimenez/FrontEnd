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

  
}
