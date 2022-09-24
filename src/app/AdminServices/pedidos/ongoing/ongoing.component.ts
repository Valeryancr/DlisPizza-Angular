import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ProyectopService } from 'src/app/service/proyectop.service';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.css']
})

export class OngoingComponent implements OnInit, OnDestroy, AfterViewInit {

  productos:any={};
  productos2:any=[];
  nombres:any=[];
  meses:any=[];
  mes=["07","08","09","10","11","12"];
  dbyMonth:any=[];
  pedidos:any=[];

  constructor(private router: Router,private htpp:HttpClient,private loginservice: AuthenticationService,private proyectoService: ProyectopService) { }

  ngOnInit() {
    this.doNotificationSubscription();
    this.getPedidos();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  doNotificationSubscription(): void {
    try {
      this.proyectoService
        .getProductNotification()
        .subscribe((result) => {
          this.getPedidos();
        });
    } catch (e) {
      console.log(e);
    }
  }

  async getPedidos(){
    this.proyectoService.getPedidosA().subscribe(
      res=>{
        this.pedidos = res;
      },
      err=>console.error(err)
    )
  }

}

