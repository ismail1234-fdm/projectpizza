import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './components/pay/pay.component';
import { PizzaComponent } from './components/pizza/pizza.component';

const routes: Routes = [
  { path: '', component: PizzaComponent },
  { path: 'pays', component: PayComponent },
  { path: '**', redirectTo: '' }
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
