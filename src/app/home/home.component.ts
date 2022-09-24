import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProyectopService } from '../service/proyectop.service';
import { AlertsService } from 'angular-alert-module';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
anuncios:any= [];
productos:any=[];
product:any=[];
carrito:any=[];
PObservable:any= new Observable;

  constructor (private router: Router, private htpp:HttpClient,private proyectoService: ProyectopService, private alerts: AlertsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getProductos();
    
  }

  buscarAnuncios(){
    this.proyectoService.getAnuncios().subscribe(
      res => { this.anuncios=res},
      err =>console.error(err)
    )
  }

  getProductos(){
    this.proyectoService.getProductos().subscribe(
      res => { 
        this.productos=res;
      },
      err =>console.error(err)
    )
  }
  agregarCarrito(producto:string){
    this.proyectoService.getProducto(producto).subscribe(
      res => {
        this.configurarObject(res);
      },
      err =>console.error(err)
    )
  }

  configurarObject(produc:any){
    this.carrito=[];
    this.carrito.productoid=produc.idproductos;
    this.carrito.pnombre=produc.nombre;
    this.carrito.pcosto=produc.precio;
    this.carrito.pcostot=produc.precio;
    this.carrito.descripcion=produc.descripcion;
    this.carrito.cantidad=1;
    this.proyectoService.addToCart(this.carrito);
    this.proyectoService.dialogT=1;
    console.log(this.proyectoService.dialogT);
    this.openDialog(produc);
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  openDialog(produc:any): void {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      data: {nombre: produc.nombre, descripcion: produc.descripcion}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
