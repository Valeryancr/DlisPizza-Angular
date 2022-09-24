import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  usuario:any = {};
  data:any = {};
  constructor(private htpp:HttpClient) { }

  buscarUsuarioS(username):Observable<any>{
    return this.htpp.get<any>("http://localhost:8887/api/dw/user/by/user/"+username)
    .pipe(
      catchError(e => {
        console.log(e.message);
        return throwError(alert("No existe una cuenta para el usuario especificado"))})
    );

  }

  authenticate(username, password,) {
    if (username === "admin" && password === "Adminmod123") {
        localStorage.setItem('username', username)
        location.href='admin-dashboard';
      }
      else{
        this.buscarUsuarioS(username).subscribe((response:any) => this.validarUsuario(username,password,response))
      }
  }

  validarUsuario(username:any, password:any,response:any){
    console.log(response);
    this.usuario = response;
    console.log(this.usuario);
    if (this.usuario==null){
      alert("No existe una cuenta para el usuario ");
    } else {
    if (password===this.usuario.password || username === "admin" && password === "Adminmod123") {
      localStorage.setItem('username', this.usuario.userId)
      if(username==='admin'){
        location.href='admin-dashboard';
      }
      else{
        location.href='home';
      }
    } else {
      if (this.usuario.estado==="inactiva"){
        alert("La cuenta del usuario "+ this.usuario.username+" se encuentra inactiva, contacta a tu administrador.");
      } else {
        alert("Contraseña incorrecta para el usuario " + this.usuario.username);
      }
      return false;
    }
    }
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('username')
    return !(user === null)
  }

isAdminLoggedIn(){
  let user=localStorage.getItem('username')
  if (user === "admin"){
    return true;
  }else {
      return false;
    }
}

  logOut() {
    localStorage.removeItem('username')
  }
  
  isNotAdminLoggedIn(){
    let user=localStorage.getItem('username')
    if (user != "admin"&&user!=null){
      return true;
    }else {
        return false;
      }
  }
  isNobodyLoggedIn(){
    let user=localStorage.getItem('username')
    if (user===null){
      return true;
    }
  }
}
