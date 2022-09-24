import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import { ProyectopService } from 'src/app/service/proyectop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
})
export class AnunciosComponent implements OnInit {
  anuncios:any = {};
  @HostBinding('class') classes = 'row';

  constructor(private proyectoService: ProyectopService, private router: Router) { }

  ngOnInit() {
    this.getAnuncios();
    this.getLocal();
  }

  getAnuncios(){
    this.proyectoService.getAnuncios().subscribe(
      res => { this.anuncios=res},
      err =>console.error(err)
    )
  }

  deleteAnuncio(id: string){
    this.proyectoService.deleteAnuncio(id)
    .subscribe(
      res => {
        console.log(res);
        this.getAnuncios();
      },
      err => console.error(err)
    )
    alert("Anuncio borrado con ID: " + id);
    }
  getLocal(){
    let user=localStorage.getItem('username')
    console.log(user);
  }
}
