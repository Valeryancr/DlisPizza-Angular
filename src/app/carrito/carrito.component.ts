import { Component, OnInit } from '@angular/core';
import { ProyectopService } from '../service/proyectop.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
carrito:any=[];
total:number;
producto:any=[];
  constructor(public proyectoService: ProyectopService) { }

  ngOnInit() {
    this.carrito=this.proyectoService.getCart();
    console.log(this.carrito);
    this.getCartT();
  }

deleteCart(index){
  console.log(index);
  alert("Se ha eliminado el producto");
  this.proyectoService.removeCartItem(index);
  this.carrito=this.proyectoService.getCart();
  this.getCartT();
}
increaseAmount(index){
  this.carrito[index].cantidad++;
  this.getProducto(this.carrito[index].productoid);
  if(this.carrito[index].cantidad>this.producto.cantidad){
    alert("No hay inventario suficiente, la cantidad disponible es "+this.producto.cantidad);
    this.carrito[index].cantidad--;
  } 
  this.carrito[index].pcostot=this.carrito[index].cantidad * this.carrito[index].pcosto;
  this.getCartT();
}

decreaseAmount(index){
  var a = this.carrito[index].cantidad--;
  if(this.carrito[index].cantidad===0){
    this.deleteCart(index);
    this.getCartT();
  }
  else{
    this.carrito[index].pcostot=this.carrito[index].cantidad * this.carrito[index].pcosto;
  }

  this.getCartT();
  }
  
  getCartT(){
    this.total=0;
    for(let i = 0; i < this.carrito.length; i++) {
      this.total += this.carrito[i].pcostot;
    }
  }

  getProducto(id){
    this.proyectoService.getProducto(id)
        .subscribe(
          res => {
            console.log(res);
            this.producto = res;
          },
          err => console.log(err)
        )
  }
}
