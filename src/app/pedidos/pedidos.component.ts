import { Component, OnInit } from '@angular/core';
import { ProyectopService } from '../service/proyectop.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos:any=[];
  product:any=[];

  constructor(private proyectoService:ProyectopService) { }

  ngOnInit() {
    let user=localStorage.getItem('username')
    
    this.proyectoService.getPedidos(user).subscribe(
      res => {
        console.log(res);
        this.pedidos = res;
      },
      err => console.log(err)
    )
    
  }

}
