import { Component, OnInit,OnDestroy } from '@angular/core';
import { PizzaElement } from '../pizza/pizzaList';
import { PayService } from 'src/Services/pay.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';



@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price'];

  constructor(private servicepay: PayService) { }

  selectedPizzas: PizzaElement[] = [];
  dataSource;

  private subcription: Subscription;

  cancel=false;

  ngOnInit(): void {

      this.subcription= this.servicepay.pizzaObservable.subscribe(
      
      (pizzaElements: PizzaElement[])=>{
      this.selectedPizzas = pizzaElements;
      this.dataSource = new MatTableDataSource<PizzaElement>(this.selectedPizzas);
    
    });
    
  }

  ngOnDestroy()
  {
      this.servicepay.removeSelectedPizza();
  }

  CancelCost()
  {
    this.ngOnDestroy();
    this.dataSource=[];
    this.selectedPizzas=[];
  }

  /**Gets the total price of all selected Pizzas */
  getTotalCost() {
    return this.selectedPizzas.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

 


}