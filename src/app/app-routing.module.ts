import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  {
    path: "add",
    loadChildren: "./add-medicine/add-medicine.module#AddMedicineModule"
  },
  {
    path: "edit/:id",
    loadChildren: "./add-medicine/add-medicine.module#AddMedicineModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
