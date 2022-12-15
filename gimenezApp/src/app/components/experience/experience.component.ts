import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  isLoggedIn = false;

  constructor(private logginService : LoggedService) { }

  ngOnInit(): void {
   
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }


}
