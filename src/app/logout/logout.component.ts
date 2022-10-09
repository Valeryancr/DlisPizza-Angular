import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";
import { Router } from "@angular/router";

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProyectopService } from "../service/proyectop.service";
import { AlertsService } from "angular-alert-module";
import { MatDialog } from "@angular/material/dialog";
import { MyDialogComponent } from "../my-dialog/my-dialog.component";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"],
})
export class LogoutComponent implements OnInit {
  anuncios: any = [];
  productos: any = [];
  product: any = [];
  carrito: any = [];
  PObservable: any = new Observable();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private htpp: HttpClient,
    private proyectoService: ProyectopService,
    private alerts: AlertsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
     this.authenticationService.logOut();
    // this.router.navigate(['login']);
    this.getProductos();
  }

  buscarAnuncios() {
    this.proyectoService.getAnuncios().subscribe(
      (res) => {
        this.anuncios = res;
      },
      (err) => console.error(err)
    );
  }

  getProductos() {
    this.proyectoService.getProductos().subscribe(
      (res) => {
        this.productos = res;
      },
      (err) => console.error(err)
    );
  }

  openDialog(produc: any): void {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      data: { nombre: produc.nombre, descripcion: produc.descripcion },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  alertLogin(){
    alert("Logeate");
    this.router.navigate(['login']);
  }

}


