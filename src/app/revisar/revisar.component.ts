import { Component, OnInit } from '@angular/core';
import { ProyectopService } from '../service/proyectop.service';
import { Router } from '@angular/router';
import { CuentaComponent } from '../cuenta/cuenta.component';

@Component({
  selector: 'app-revisar',
  templateUrl: './revisar.component.html',
  styleUrls: ['./revisar.component.css']
})
export class RevisarComponent implements OnInit {
  carrito:any=[];
  total:number;
  compra:any ={
    productospedidos:[]
  };
  producto:any=[];
  user:any=[];
 
  constructor(private proyectoService: ProyectopService,private route:Router) { }

  ngOnInit() {
    this.carrito=this.proyectoService.getCart();
    this.getCartT();
    this.user = JSON.parse(localStorage.getItem("cuenta"));
    console.log(this.user.direccion);
    console.log(this.compra);
  }

  

  getCartT(){
    this.total=0;
    for(let i = 0; i < this.carrito.length; i++) {
      this.total += this.carrito[i].pcostot;
    }
  }

  agregarPedido(){
   this.setPedido();
   console.log(this.compra);
    this.proyectoService.savePedido(this.compra).subscribe(
      res => { 
        console.log(res);
        alert("¡Gracias por realizar tu pedido!");
        this.proyectoService.clearCart();
        this.route.navigate(['/home/cuenta/pedidos']);
      },
      err => console.error(err)
    )
  }

  setPedido(){
    let user=localStorage.getItem('username')
    this.compra.usuarioUserId=user;
    this.compra.total=this.total;
    this.compra.completed=0;
    this.compra.domicilio="Y";
    this.configObject();
  }
  configObject(){
    for(let i = 0; i < this.carrito.length; i++) {
      this.compra.productospedidos.push({
        productoid:this.carrito[i].productoid,
        cantidad:this.carrito[i].cantidad,
        pnombre:this.carrito[i].pnombre,
        pcosto:this.carrito[i].pcosto,
        subtotal:this.carrito[i].pcostot
      })
      //this.obtainProduct(this.carrito[i].productoid,this.carrito[i].cantidad);
    }
  }
  
  /*obtainProduct(i,cant){
      this.proyectoService.getProducto(i)
      .subscribe(
        res => {
          this.producto = res;
          this.producto.cantidad=this.producto.cantidad-cant; 
          this.updateProduct(this.producto);
        },
        err => console.log(err)
        )
  }*/

  updateProduct(producto) {
    this.proyectoService.updateProducto(producto.idproductos, producto)
      .subscribe(
        res => { 
          console.log(res);
        },
        err => console.error(err)
      )
  }
}
