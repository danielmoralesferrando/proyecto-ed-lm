import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rickymorty } from '../../../../../../MiPrimeraApp/src/app/common/rickymorty';
import { PersonajeONE } from '../../../../../../MiPrimeraApp/src/app/common/personaje-one';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) { }
  
  private urlAPI = 'https://rickandmortyapi.com/api/character/';
  
  getPersonajesRyM(): Observable<Rickymorty>{
    return this.http.get<Rickymorty>(this.urlAPI)
  }
  public getPersonajeONE(id: number): Observable<PersonajeONE> {
    return this.http.get<PersonajeONE>(this.urlAPI + id);
  }

   public getPage(page:string): Observable<Rickymorty>{
    return this.http.get<Rickymorty>(page)
   }
}
