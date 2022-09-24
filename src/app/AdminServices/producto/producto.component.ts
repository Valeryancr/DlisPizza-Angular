import { Component, OnInit, HostBinding } from '@angular/core';
import { ProyectopService } from 'src/app/service/proyectop.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from 'src/app/my-dialog/my-dialog.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
productos:any=[];
@HostBinding('class') classes = 'row';
  constructor(private proyectoService: ProyectopService, private router: Router, private dialog:MatDialog) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(){
    this.proyectoService.getProductos().subscribe(
      res => { this.productos=res},
      err =>console.error(err)
    )
  }
  deleteProducto(id: string){
    this.proyectoService.deleteProducto(id)
    .subscribe(
      res => {
        console.log(res);
        this.getProductos();
      },
      err => console.error(err)
    )
    this.proyectoService.dialogT=2;
    this.openDialog(id);
    }
    openDialog(produc:any): void {
      this.dialog.open(MyDialogComponent, {
      });
    }
}

