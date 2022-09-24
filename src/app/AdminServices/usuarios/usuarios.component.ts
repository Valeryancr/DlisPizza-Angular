import { Component, OnInit } from '@angular/core';
import { ProyectopService} from '../../service/proyectop.service'
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from 'src/app/my-dialog/my-dialog.component';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users:any=[];

  constructor(private proyectoService: ProyectopService, private router: Router, private dialog:MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.proyectoService.getUsers().subscribe(
      res => { this.users=res},
      err =>console.error(err)
    )
    console.log(this.users);
  }

  deleteUser(id: string) {
    this.proyectoService.deleteUser(id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsers();
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
