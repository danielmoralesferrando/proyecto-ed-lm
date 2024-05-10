import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../common/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor( private http: HttpClient) { }

  getProduct(): Observable<Productos>{
    return this.http.get<Productos>('./assets/data/catalogo.json')
  }
}
