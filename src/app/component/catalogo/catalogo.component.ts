import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data/data.service';
import { subscribe } from 'diagnostics_channel';
import { productos } from '../../common/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
<<<<<<< HEAD
export class CatalogoComponent{
=======
export class CatalogoComponent implements OnInit{


  productos!: productos;
  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(){

    this.dataService.getProduct().subscribe({
      next: (data) =>{
        console.log(data)
        this.productos = data
      },
      error: err =>{
        console.log(err)
      },
      complete: ()=>{
        console.log("completado")
      }
    })

    this.dataService.getProduct().subscribe(
      {
        next: (data) =>{
          console.log(data)
          this.productos = data
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
>>>>>>> ad4da7106bbea18e09e3e533ad771b8088fbcb07
}
