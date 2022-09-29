import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ""
  password = ""
  invalidLogin = false
  hide = true;
  olvidar = false;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

 
  checkLogin() {
    console.log(this.username);
    console.log(this.password);
    this.loginservice.authenticate(this.username, this.password);
    } 
} 
