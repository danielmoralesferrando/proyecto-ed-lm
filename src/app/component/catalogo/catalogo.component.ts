import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data/data.service';
import { productos } from '../../common/productos';
import { CommonModule } from '@angular/common';
import { Producto } from '../../common/productos';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})


export class CatalogoComponent implements OnInit{


  productosList!: productos;
  productoItem!: Producto;
  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(){

    this.dataService.getProducts().subscribe({
      next: (data) =>{
        console.log(data)
        this.productosList = data
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
          this.productoItem = data
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

}
