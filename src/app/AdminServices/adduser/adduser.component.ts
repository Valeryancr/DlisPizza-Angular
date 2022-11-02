import { Component, OnInit } from '@angular/core';
import {ProyectopService} from '../../service/proyectop.service';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router'
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  
  user:any = {
    direccion:[],
    pedidos:[]
  };
  miFormulario:FormGroup;
  edit: boolean = false;
  password="";
  password1="";

  constructor(public loginservice: AuthenticationService, private userService:ProyectopService, private fb:FormBuilder, private route:Router,private ActiveRoute:ActivatedRoute) { }

  ngOnInit() {
  

    this.miFormulario=this.fb.group({
       direccion: this.fb.array([this.fb.group({direccion: [''], lugarTipo: [''], idDireccion:['']})])
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
            this.setDirecciones(this.user);
            this.edit = true;
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
        this.route.navigate(['/admin-dashboard/usuarios']);
      },
      err=> console.error(err)
    )
  }
  updateUser(){
    if(this.isValidPass()){
    if (this.password===this.password1)
    this.upPasswordMatch();
    else
      alert("Las contraseñas no coinciden");}
    else
      alert("Las contraseña debe contener al menos: 1 Mayúsucula, 1 Minúscula, 1 Dígito");
  }

  upPasswordMatch(){
    this.user.direccion=this.miFormulario.value.direccion;
    console.log(this.user.direccion);
    this.user.password=this.password;
    console.log(this.user);
    this.userService.updateUser(this.user.userId, this.user).subscribe(
      res=>{
        alert("Usuario actualizado: " + this.user.username);
        this.route.navigate(['/admin-dashboard/usuarios']);
      },
      err=> console.error(err)
    )
  }

  usuarioCreado(user:any){
    alert("Usuario creado con ID: " + user.codigo);
  }

  get getDirecciones(){
    return this.miFormulario.get('direccion') as FormArray;
  }

  setDirecciones(user:any){
    const control = <FormArray>this.miFormulario.controls['direccion'];
    control.removeAt(0);
     for(var i=0;i<user.direccion.length;i++){
      control.push(this.fb.group({direccion:user.direccion[i].direccion, lugarTipo:user.direccion[i].lugarTipo, idDireccion:user.direccion[i].idDireccion}));
    }
  }

  addDireccion(){
    console.log(this.miFormulario)
    const control = <FormArray>this.miFormulario.controls['direccion'];
    control.push(this.fb.group({direccion:[], lugarTipo:[], idDireccion:[]}));
  }

  removeDireccion(index:number){
    const control = <FormArray>this.miFormulario.controls['direccion'];
    var id=this.miFormulario.value.direccion[index].direccion;
    var idte=this.miFormulario.value.direccion[index].idDireccion;
    console.log(idte);
    if (id!=null){
      this.userService.deleteDireccion(idte).subscribe(
        res => {
          console.log(res);
          },
          err => console.error(err)
      )}
    control.removeAt(index);
  }
}
//*if (id!=null){
//  this.vendedoraService.deleteTelefono(id.numero)
//  .subscribe(
//    res => {
//      console.log(res);
//    },
//    err => console.error(err)
 // )
//  alert("Telefono borrado con ID: " + index);
//}