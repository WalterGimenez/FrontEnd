import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  isLoggedIn = false;

  constructor(private logginService : LoggedService) { }


  ngOnInit(): void {
   
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }

}
