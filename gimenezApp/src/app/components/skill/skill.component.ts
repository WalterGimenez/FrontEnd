import { hardsoft } from './../../model/hardsoft.model';
import { Component, OnInit } from '@angular/core';
import { LoggedService } from 'src/app/service/logged.service';
import { HardSoftService } from 'src/app/service/hardsoft.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  hardsoft : hardsoft [] = [];
  isLoggedIn = false;

  constructor(private logginService : LoggedService, private serviceHyS : HardSoftService) { }


  ngOnInit(): void {
    this.loadHys();
    this.logginService.login$.subscribe((loginState => {
    this.isLoggedIn = loginState;}))
  }
  loadHys(): void{
    this.serviceHyS.list().subscribe(
      data => { this.hardsoft = data; }
    )
  }

}
