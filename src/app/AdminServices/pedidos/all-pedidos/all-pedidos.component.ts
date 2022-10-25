import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import { ProyectopService } from 'src/app/service/proyectop.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-all-pedidos',
  templateUrl: './all-pedidos.component.html',
  styleUrls: ['./all-pedidos.component.css']
})

export class AllPedidosComponent implements OnInit {

  users:any=[];
  pedidos:any=[];
  tipoExport:any;

  displayedColumns: string[] = ['id','fecha','usuarioUserId','nombre', 'estado','total', 'direccionEntrega'];
  dataSource:any = new MatTableDataSource<any>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  constructor(private proyectoService: ProyectopService) { }

  ngOnInit(): void {
    this.getPedidos();
    this.getUsers();
  }


  async getPedidos(){
    this.proyectoService.getPedidosA().subscribe(
      res =>{
        this.pedidos = res;
        this.dataSource.data = res; 
      },
      err=>console.error(err)
    )
    console.log((this.pedidos));
  }

  getUsers(){
    this.proyectoService.getUsers().subscribe(
      res => { this.users=res},
      err =>console.error(err)
    )
    console.log(this.users);
  }

}
