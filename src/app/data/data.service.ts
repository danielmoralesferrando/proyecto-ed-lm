import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productos } from '../common/productos';
import { Producto } from '../common/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor( private http: HttpClient) { }

  getProducts(): Observable<productos>{
    return this.http.get<productos>('./assets/data/productos.json')
  }

  getProduct(): Observable<Producto>{
    return this.http.get<Producto>('./assets/data/productos.json')
  }
}
