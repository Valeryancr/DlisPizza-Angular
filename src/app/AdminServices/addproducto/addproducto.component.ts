import { Component, OnInit } from '@angular/core';
import { ProyectopService } from 'src/app/service/proyectop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.css']
})
export class AddproductoComponent implements OnInit {
  producto:any={};
  edit: boolean = false;
  
  constructor(private proyectoService:ProyectopService, private router:Router,private ActiveRoute:ActivatedRoute) { }

  ngOnInit() {
    const params= this.ActiveRoute.snapshot.params;
    if (params.id) {
      this.proyectoService.getProducto(params.id)
        .subscribe(
          res => {
            this.producto = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveProducto() {
    console.log(this.producto);
    this.proyectoService.saveProducto(this.producto)
      .subscribe(
        res => {
          this.router.navigate(['/admin-dashboard/productos']);
        },
        err => console.error(err)
      )
  }

  updateProducto() {
    this.proyectoService.updateProducto(this.producto.idproductos, this.producto)
      .subscribe(
        res => { 
          this.router.navigate(['/admin-dashboard/productos']);
        },
        err => console.error(err)
      )
  }
}
