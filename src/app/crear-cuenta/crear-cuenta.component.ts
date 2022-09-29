import { Component, OnInit } from '@angular/core';
import {ProyectopService} from '../service/proyectop.service';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router'
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
  user:any = {
    direccion:[],
    pedidos:[]
  };
  miFormulario:FormGroup;
  password="";
  password1="";

  constructor(public loginservice: AuthenticationService, private userService:ProyectopService, private fb:FormBuilder, private route:Router,private ActiveRoute:ActivatedRoute) { }

  ngOnInit() {
  

     this.miFormulario=this.fb.group({
        direccion: this.fb.array([this.fb.group({direccion: [''],idDireccion:['']})])
    });
    
     const params= this.ActiveRoute.snapshot.params;
     console.log(this.ActiveRoute.snapshot.params);
     if (params.id) {
       this.userService.getUser(params.id)
         .subscribe(
           res => {
             console.log(res);
             this.user = res;
             this.password=this.user.password;
        },
           err => console.log(err)
         )
   }
  }

passwordMatch(){
  if(this.isValidPass()){
    if (this.password===this.password1)
    this.saveUser();
  else
  alert("Las contraseñas no coinciden");
  } else
  alert("Las contraseña debe contener al menos: 1 Mayúsucula, 1 Minúscula, 1 Dígito");
}

isValidPass(){
  var regex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  var valid=regex.test(this.password);
  if(valid==true)
  return true;
  else
  return false;
}

  saveUser(){
    this.user.direccion=this.miFormulario.value.direccion;
    this.user.password=this.password;
    this.userService.saveUser(this.user).subscribe(
      res=>{
        this.usuarioCreado(res);
        this.route.navigate(['/login']);
      },
      err=> console.error(err)
    )
  }

  usuarioCreado(user:any){
    alert("Usuario creado con exito");
  }

  
}