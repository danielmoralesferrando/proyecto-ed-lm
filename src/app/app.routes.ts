import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';

export const routes: Routes = [
    {path: 'home', title: 'Home',component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: '**', component: PageNotFoundComponent}
];
