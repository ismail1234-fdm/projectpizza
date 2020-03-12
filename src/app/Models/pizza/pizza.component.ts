import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { PizzaElement } from 'src/app/Models/pizza/pizzaList';
import { PizzaService } from 'src/Services/pizza.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { PayService } from 'src/Services/pay.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {



  title = 'pizzaproject';
  ELEMENT_DATA: PizzaElement[];

  displayedColumns: string[] = ['select', 'position', 'name', 'price'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  selection = new SelectionModel<PizzaElement>(true, []);

  selectedPizzas: PizzaElement[] = [];
  chosenPizza: PizzaElement[];

  dataSource;

  constructor(private _pizzaservice: PizzaService, private _payService: PayService) {

  }


  ngOnInit() { // we should call the service eher in ngOnInit()
    this.ELEMENT_DATA = this._pizzaservice.getPizza();
    this.dataSource = new MatTableDataSource<PizzaElement>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  // dataSource = new MatTableDataSource<PizzaElement>(this.ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle($event) {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PizzaElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }




  selectRow($event: MatCheckboxChange, pizzaElement: PizzaElement) {
    if ($event.checked) {
      this._payService.addPizza(pizzaElement);

      //this.selectedPizzas.push(pizzaElement);      
      //this.chosenPizza=this.dataSource.filter(pizza=> (pizza.position===this.selectedPizzaids));
      //this.selectedPizza = [...this.selectedPizza, dataSource.position];
    }
  }

  ShowSelectedRow() {
    // this.chosenPizza=this.dataSource.filter(pizza=> (pizza.position===this.selectedPizzaids));
    console.log(this.selectedPizzas);
  }

  onCancel() {
    this.selection.clear();
    this.selectedPizzas = [];
  }



}
