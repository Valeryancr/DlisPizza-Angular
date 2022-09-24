import { AfterViewInit, Component, OnDestroy, OnInit, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ProyectopService } from 'src/app/service/proyectop.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  productos:any={};
  productos2:any=[];
  nombres:any=[];
  meses:any=[];
  mes=["07","08","09","10","11","12"];
  dbyMonth:any=[];
  pedidos:any=[];

  lineChartOptions={
    responsive: true,
    scales: {
        yAxes: [{
          ticks: {
              min: 0,
              max: 10,
              stepSize: 1
          } }]}
  };
  
  lineChartLabels=["Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  lineChartType='line';
  lineChartLegend=true;
  lineChartData:any=[];

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
        this.dbyMonth=[];
        this.getMeses(res);
      },
      err=>console.error(err)
    )
  }
  
  async getMeses(res:any){
    this.mes.forEach(element => {
      this.meses=res.map(function(a){return a.fecha}).filter(ress => ress.includes("2022-"+ element));
      this.dbyMonth.push(this.meses.length);
    });
    console.log(this.dbyMonth);
    this.lineChartData= [{data: this.dbyMonth,
      label:'Pedidos por mes', 
      backgroundColor: ['rgba(13, 12, 12, 0.4)'], 
      borderColor: ['rgba(13, 12, 12, 0.9)'],
      pointBackgroundColor: ['rgba(13, 12, 12, 0.4)'], 
      pointBorderColor: ['rgba(13, 12, 12, 0.9)']}];
  }
}