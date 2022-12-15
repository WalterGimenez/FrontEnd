import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  isLoggedIn = false;

  constructor(private logginService : LoggedService) { }

  ngOnInit(): void {
   
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }

}
