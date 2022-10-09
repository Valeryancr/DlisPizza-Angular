import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { AdminDashboardComponent } from './AdminServices/admin-dashboard/admin-dashboard.component';
import { AuthGuardAdminService } from './service/auth-guard-admin.service';
import { LogoutComponent } from './logout/logout.component';
import { UsuariosComponent } from './AdminServices/usuarios/usuarios.component';
import { AnunciosComponent } from './AdminServices/anuncios/anuncios.component';
import { ProductoComponent } from './AdminServices/producto/producto.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AddanuncioComponent } from './AdminServices/addanuncio/addanuncio.component';
import { AdduserComponent } from './AdminServices/adduser/adduser.component';
import { AddproductoComponent } from './AdminServices/addproducto/addproducto.component';
import { PedidosComponent} from './pedidos/pedidos.component'
import { CarritoComponent } from './carrito/carrito.component'
import { RevisarComponent } from './revisar/revisar.component'
import { OngoingComponent } from './AdminServices/pedidos/ongoing/ongoing.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';

const routes: Routes = [
  {path:'home',component:HomeComponent, canActivate:[AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: '', component: LogoutComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/usuarios', component:UsuariosComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/usuarios/edit/:id', component:AdduserComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/usuarios/add', component:AdduserComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/anuncios', component:AnunciosComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/anuncios/add', component:AddanuncioComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/anuncios/edit/:id', component:AddanuncioComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/productos', component:ProductoComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/productos/add', component:AddproductoComponent, canActivate:[AuthGuardAdminService]},
  {path:'admin-dashboard/productos/edit/:id', component:AddproductoComponent, canActivate:[AuthGuardAdminService]},
  {path: 'home/cuenta', component:CuentaComponent,canActivate:[AuthGaurdService]},
  {path: 'home/cuenta/pedidos', component:PedidosComponent,canActivate:[AuthGaurdService]},
  {path: 'home/cart', component:CarritoComponent,canActivate:[AuthGaurdService]},
  {path: 'home/cuenta/edit/:id', component:AdduserComponent, canActivate:[AuthGaurdService]},
  {path: 'home/cart/revisar', component:RevisarComponent,canActivate:[AuthGaurdService]},
  {path: 'admin-dashboard/pedidos', component:OngoingComponent, canActivate:[AuthGaurdService]},
  {path: 'crearCuenta', component:CrearCuentaComponent},
  {path: 'recuperarPass', component:RecuperarPassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
