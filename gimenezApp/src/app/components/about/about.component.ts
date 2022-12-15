import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { LoggedService } from 'src/app/service/logged.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","","","","","","");
  isLoggedIn = false;


  constructor(public personaService : PersonaService, private logginService : LoggedService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }

}
