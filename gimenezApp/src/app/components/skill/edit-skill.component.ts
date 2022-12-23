import { HardSoftService } from './../../service/hardsoft.service';
import { hardsoft } from './../../model/hardsoft.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  hardsoft : hardsoft = null;

  constructor(private hardsoftService : HardSoftService ,private activatedRouter : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      const id = params['id'];
      this.hardsoftService.detail(id).subscribe(
        data =>{
          this.hardsoft = data;
        }, err =>{
          alert("Error al pasar el id");
          this.router.navigate(['']);
        }
      )
    });

  }


  update(): void{
    this.activatedRouter.params.subscribe(params => {
      const id = params['id'];
      this.hardsoftService.update(id, this.hardsoft).subscribe(
        data => {
      
          this.router.navigate(['']);
        }, err => {
          alert("Error al querer modificar la educacion");
          this.router.navigate(['']);
        }
      )
    });
  }

  canceled(){
    alert("No se realizaron cambios");
    this.router.navigate(['']);
  }

}
