import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productos } from '../common/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor( private http: HttpClient) { }

  getProduct(): Observable<any>{
    return this.http.get('./assets/data/productos.json')
  }
}
