import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName
  password

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginFormValues){
    this.authService.loginUser(loginFormValues.userName, loginFormValues.password)

    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }

}
