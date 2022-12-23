import { EditProyectComponent } from './components/proyect/edit-proyect.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full'},
  {path: "edited/:id", component : EditEducationComponent, pathMatch: 'full'},
  {path: "exped/:id", component : EditExperienceComponent, pathMatch: 'full'},
  {path: "hsed/:id", component : EditSkillComponent, pathMatch: 'full'},
  {path: "proyed/:id", component : EditProyectComponent, pathMatch: 'full'},
  {path: "**", component: ErrorComponent, pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
