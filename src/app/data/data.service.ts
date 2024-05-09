import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosComponent } from '../component/productos/productos.component';
import { RootInterface } from '../common/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor( private http: HttpClient) { }

  getProduct(): Observable<RootInterface>{
    return this.http.get<RootInterface>('./assets/data/data.json')
  }
}
