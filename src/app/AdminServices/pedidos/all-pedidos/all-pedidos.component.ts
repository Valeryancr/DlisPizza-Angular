import { Component, OnInit } from '@angular/core';
import { ProyectopService } from 'src/app/service/proyectop.service';

@Component({
  selector: 'app-all-pedidos',
  templateUrl: './all-pedidos.component.html',
  styleUrls: ['./all-pedidos.component.css']
})
export class AllPedidosComponent implements OnInit {

  users:any=[];
  pedidos:any=[];

  constructor(private proyectoService: ProyectopService) { }

  ngOnInit(): void {
    this.getPedidos();
    this.getUsers();
  }

  async getPedidos(){
    this.proyectoService.getPedidosA().subscribe(
      res=>{
        this.pedidos = res;
      },
      err=>console.error(err)
    )
  }

  getUsers(){
    this.proyectoService.getUsers().subscribe(
      res => { this.users=res},
      err =>console.error(err)
    )
    console.log(this.users);
  }

}
