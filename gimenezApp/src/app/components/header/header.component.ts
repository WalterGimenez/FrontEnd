import { Observable } from 'rxjs';
import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/model/user-login';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/service/logged.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged : boolean;
  isLogginFail : boolean;
  userLogin : UserLogin;
  userName : string;
  password : string;
  roles: string[] = [];
  errorMessage : string;
  first = true;
  public loginTrue : boolean;



  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router, private logginService : LoggedService){}
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.userLogin = new UserLogin(this.userName, this.password);
    this.authService.login(this.userLogin).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = data.authorities;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.userName);
      this.tokenService.setAuthorities(data.authorities);
      this.logginService.setIsLoggedNow(true);
      this.router.navigateByUrl("/");
     
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      this.errorMessage = err.error.mensaje;
      this.logginService.setIsLoggedNow(false);
      this.first = false;
      alert("no tien permisos como administrador");
    });
    
    
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
