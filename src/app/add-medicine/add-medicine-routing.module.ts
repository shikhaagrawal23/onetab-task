import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMedicineComponent } from './add-medicine.component';


const routes: Routes = [
  {path: '', component: AddMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMedicineRoutingModule { }
