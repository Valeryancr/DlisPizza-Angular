import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Anuncio } from '../models/Anuncio';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';
import {NativeEventSource, EventSourcePolyfill} from 'event-source-polyfill';

declare var EventSourcePolyfill: any;
const EventSource = NativeEventSource || EventSourcePolyfill;

@Injectable({
  providedIn: 'root'
})
export class ProyectopService {
  dialogT=0;
  API_URI='http://localhost:8887/api/dw';
  carrito: any=[];

  constructor(private http: HttpClient) {}

  dialogType(type):number {
    return type;
  }

  addToCart(carrito){
    this.carrito.push(carrito);
  }
  clearCart(){
    this.carrito.length=0;
  }
  removeCartItem(index){
    this.carrito.splice(index,1);
  }
  getCart(){
    return this.carrito;
  }
  cartnEmpty(){
    if(this.carrito.length>0)
    return true;
  }
  cartEmpty(){
    if(this.carrito.length==0)
    return true;
  }

  getUsers(){
    return this.http.get(`${this.API_URI}/user/all`);
  }
  getUser(id:String){
    return this.http.get(`${this.API_URI}/user/find/id/${id}`);
  }
  saveUser(user:any){
    return this.http.post(`${this.API_URI}/user/save`, user);
  }
  deleteUser(id:string){
    return this.http.delete(`${this.API_URI}/user/${id}`);
  }
  deleteDireccion(id:string){
    return this.http.delete(`${this.API_URI}/direccion/${id}`);
  }
  updateUser(id,updatedUser){
    return this.http.put(`${this.API_URI}/user/${id}`,updatedUser)
  }

  getAnuncios(){
    return this.http.get(`${this.API_URI}/anuncios/all`);
  }
  getAnuncio(id:string){
    return this.http.get(`${this.API_URI}/anuncios/find/id/${id}`);
  }
  saveAnuncio(anuncio:Anuncio){
    return this.http.post(`${this.API_URI}/anuncios/save`, anuncio);
  }
  deleteAnuncio(id:string){
    return this.http.delete(`${this.API_URI}/anuncios/${id}`);
  }
  updateAnuncio(id,updatedAnuncio){
    return this.http.put(`${this.API_URI}/anuncios/${id}`,updatedAnuncio)
  }

  getProductos(){
    return this.http.get(`${this.API_URI}/productos/all`);
  } 
  getProductNotification(): Observable<any> {
    return Observable.create((observer) => {
      const url: any = `${this.API_URI}/notification/sse`;
      const eventSource = new EventSource(url);
      eventSource.onmessage = (event) => {
        console.log('Received event: ', event);
      };
      eventSource.addEventListener('Product-update', function (event: any) {
        observer.next(event.data);
      });
      return () => eventSource.close();
    });
  }

  getProducto(id:string){
    return this.http.get(`${this.API_URI}/productos/find/id/${id}`);
  }
  saveProducto(producto:any){
    return this.http.post(`${this.API_URI}/productos/save`, producto);
  }
  deleteProducto(id:string){
    return this.http.delete(`${this.API_URI}/productos/${id}`);
  }
  updateProducto(id,updatedProducto){
    return this.http.put(`${this.API_URI}/productos/${id}`,updatedProducto)
  }

  getPedidosA(){
    return this.http.get(`${this.API_URI}/compra/all`);
  }
  savePedido(pedido:any){
    return this.http.post(`${this.API_URI}/compra/save`, pedido);
  }
  getPedidos(id:string){
    return this.http.get(`${this.API_URI}/compra/by/ven/${id}`);
  }
}
