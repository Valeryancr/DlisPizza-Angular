import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminDashboardComponent } from './AdminServices/admin-dashboard/admin-dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { UsuariosComponent } from './AdminServices/usuarios/usuarios.component';
import { AnunciosComponent } from './AdminServices/anuncios/anuncios.component';
import { ProductoComponent } from './AdminServices/producto/producto.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import {ProyectopService} from './service/proyectop.service';
import { AdduserComponent } from './AdminServices/adduser/adduser.component';
import { AddanuncioComponent } from './AdminServices/addanuncio/addanuncio.component';
import { AddproductoComponent } from './AdminServices/addproducto/addproducto.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RevisarComponent } from './revisar/revisar.component';
import { ChartsModule } from 'ng2-charts'; 
import { AlertsModule } from 'angular-alert-module';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { OngoingComponent } from './AdminServices/pedidos/ongoing/ongoing.component'


import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    LogoutComponent,
    UsuariosComponent,
    AnunciosComponent,
    ProductoComponent,
    NavigationComponent,
    CuentaComponent,
    CarritoComponent,
    PedidosComponent,
    AdduserComponent,
    AddanuncioComponent,
    AddproductoComponent,
    RevisarComponent,
    MyDialogComponent,
    OngoingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ChartsModule,
    AlertsModule.forRoot(),
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,

  ],
  providers: [
    ProyectopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
