import { Injectable } from '@angular/core';
import { PizzaElement } from 'src/app/Models/pizza/pizzaList';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  constructor() { }

  getPizza():PizzaElement[]
  {
      return [
          {position:1,name:"Pizza Margherita",price:12},
          {position:2,name:"Quattro Formaggi",price:18},
          {position:3,name:"Marinara",price:19},
          {position:4,name:"Tonno",price:20},
          {position:5,name:"Gorgonzola",price:22},
          {position:6,name:"Calzone ",price:25}
      ]
  }





}
