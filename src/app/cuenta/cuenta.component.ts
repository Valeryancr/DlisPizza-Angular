import { Component, OnInit } from '@angular/core';
import { ProyectopService } from '../service/proyectop.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
user:any={
  direcciones:[]
}
  constructor(private vendedoraService:ProyectopService) { }

  ngOnInit() {
    let user=localStorage.getItem('username')
    console.log(user);
    this.vendedoraService.getUser(user).subscribe(
      res => {
        console.log(res);
        this.user = res;
      },
      err => console.log(err)
    )
  }

}
