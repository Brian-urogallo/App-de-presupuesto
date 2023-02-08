import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  { path:'', redirectTo: '/ingresar_presupuesto', pathMatch:'full' },
  { path: "ingresar_presupuesto", component: IngresarPresupuestoComponent},
  { path: "gastos", component: GastosComponent},
  { path: '**', redirectTo:'/ingresar_presupuesto', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
