import { Component, OnInit } from '@angular/core';
import { PersonajeONE } from '../../common/personaje-one';
import { APIServiceService } from '../../data/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personaje-one',
  standalone: true,
  imports: [],
  templateUrl: './personaje-one.component.html',
  styleUrl: './personaje-one.component.css'
})
export class PersonajeONEComponent implements OnInit {
  personajeONE!: PersonajeONE;
  constructor(private apiService: APIServiceService,
    private activatedRoute: ActivatedRoute,
    private Routed: Router
  ){}

  ngOnInit(): void {
    this.loadPersonajeONE();
  }

  loadPersonajeONE(){
    const id = this.activatedRoute.snapshot.params['parametro']
    this.apiService.getPersonajeONE(id).subscribe(
      {
        next: (data) =>{
          console.log(data)
          this.personajeONE = data
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

  CambiaChar(id: number){
    if(id>0 && id <827){
      this.Routed.navigateByUrl('/personajeONE/'+ id)
       .then(()=>this.loadPersonajeONE())
    }
  }
}
