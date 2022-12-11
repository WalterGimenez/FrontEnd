import { TokenService } from './../../service/token.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/model/user-login';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  userLogin : UserLogin;
  userName : string;
  password : string;
  roles: string[] = [];
  errorMessage : string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){}
  
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
      this.router.navigateByUrl("/");
      
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      this.errorMessage = err.error.mensaje;
    });
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
