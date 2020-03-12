import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './Models/pay/pay.component';
import { PizzaComponent } from './Models/pizza/pizza.component';

const routes: Routes = [
    { path: 'pays', component: PayComponent },
    { path: '**', component: PizzaComponent }
];
@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]


})
export class AppRoutingModule { }
