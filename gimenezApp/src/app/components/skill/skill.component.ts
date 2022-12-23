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
  nameNew : string;
  percNew : number;

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

  create(): void{
    const NewHS = new hardsoft(this.nameNew,this.percNew);
    this.serviceHyS.save(NewHS).subscribe(data => {
      this.loadHys();
      alert("Experiencia agregada");
      
    },err =>{
      alert("No se pudo crear");
    }
    )
  }

  delete(id?: number){
    if(id !=undefined){
      this.serviceHyS.delete(id).subscribe(
        data => { this.loadHys();
        }, err =>{
          alert("No se eliminó")
        }
        
      )
    }
  }
}
