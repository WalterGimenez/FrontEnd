import { LoggedService } from 'src/app/service/logged.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { SkillComponent } from './components/skill/skill.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { CommonModule } from '@angular/common';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditProyectComponent } from './components/proyect/edit-proyect.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ButtonComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    ErrorComponent,
    ProyectComponent,
    SkillComponent,
    EditEducationComponent,
    EditExperienceComponent,
    EditProyectComponent,
    EditSkillComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [LoggedService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
