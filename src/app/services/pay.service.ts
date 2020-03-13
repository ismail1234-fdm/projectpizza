import { Injectable, Optional } from '@angular/core';
import { PizzaComponent } from 'src/app/components/pizza/pizza.component';
import { PizzaElement } from 'src/app/interfaces/pizza-element.interface';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PayService {


  private arrayPizza: PizzaElement[]=[];

  pizzaSubject: BehaviorSubject<PizzaElement[]> = new BehaviorSubject(this.arrayPizza);
  pizzaObservable: Observable<PizzaElement[]> = this.pizzaSubject.asObservable();




  constructor() { }



  getSelectedPizzas(): PizzaElement[] {
    return this.arrayPizza;
  }

  addPizza(pizzaElement: PizzaElement) {
    this.arrayPizza = [...this.arrayPizza, pizzaElement];
    this.pizzaSubject.next(this.arrayPizza);
  }




  removeSelectedPizza():void {
  this.arrayPizza=[];
  console.log(this.arrayPizza);
  }
}
