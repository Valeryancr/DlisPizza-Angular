import { Component, OnInit } from '@angular/core';
import { ProyectopService } from 'src/app/service/proyectop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addanuncio',
  templateUrl: './addanuncio.component.html',
  styleUrls: ['./addanuncio.component.css']
})
export class AddanuncioComponent implements OnInit {
  anuncio:any={};
  edit: boolean = false;
  
  constructor(private proyectoService:ProyectopService, private router:Router,private ActiveRoute:ActivatedRoute) { }

  ngOnInit() {
    const params= this.ActiveRoute.snapshot.params;
    if (params.id) {
      this.proyectoService.getAnuncio(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.anuncio = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveAnuncio() {
    this.proyectoService.saveAnuncio(this.anuncio)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin-dashboard/anuncios']);
        },
        err => console.error(err)
      )
  }

  updateAnuncio() {
    this.proyectoService.updateAnuncio(this.anuncio.idanuncios, this.anuncio)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/admin-dashboard/anuncios']);
        },
        err => console.error(err)
      )
  }
}
