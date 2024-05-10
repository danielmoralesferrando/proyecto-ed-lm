import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { PagoComponent } from './component/pago/pago.component';
import { RickyMortyComponent } from './component/ricky-morty/ricky-morty.component';
import { PersonajeONEComponent } from './component/personaje-one/personaje-one.component';

export const routes: Routes = [
    {path: 'home', title: 'Home',component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'pago', component: PagoComponent},
    {path: 'personajesRyM', component: RickyMortyComponent},
    {path: 'personajeONE/:parametro', component: PersonajeONEComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
