import { Component, OnInit } from '@angular/core';
import { Rickymorty } from '../../common/rickymorty';
import { APIServiceService } from '../../data/apiservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ricky-morty',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ricky-morty.component.html',
  styleUrl: './ricky-morty.component.css'
})
export class RickyMortyComponent implements OnInit{
  personajesRyM!: Rickymorty;
  constructor(private apiService: APIServiceService){}

  ngOnInit(): void {
    this.loadPersonajesRyM();
  }
  loadPersonajesRyM(){
    this.apiService.getPersonajesRyM().subscribe(
      {
        next: (data) =>{
          console.log(data)
          this.personajesRyM = data
        },
        error: err => {
          console.log(err)
        },
        complete: () =>{
          console.log('completado')
        }
      }
    )
  }

  loadPage(page: string){
    this.apiService.getPage(page).subscribe(
      {
        next:(data) =>{
          this.personajesRyM = data;
          console.log(data)
        },
        error: err => {
          console.log(err)
        },
        complete: () =>{
          console.log('completado')
        }
      }
    )
  }
  
  CambiaPagina(page: string){
    switch(page){
      case 'Anterior':
        this.loadPage(this.personajesRyM.info.prev)
      break;
      case 'Primera':
        this.loadPage('https://rickandmortyapi.com/api/character/?page=1')
      break;
      case 'Ultima':
        this.loadPage('https://rickandmortyapi.com/api/character/?page='+ this.personajesRyM.info.pages)
      break;
      case 'Penultima':
        this.loadPage('https://rickandmortyapi.com/api/character/?page='+ (this.personajesRyM.info.pages -1))
      break;
      case 'Siguiente':
        this.loadPage(this.personajesRyM.info.next)
      break;
      
    }
  }
}
