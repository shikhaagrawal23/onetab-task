import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMedicineComponent } from './add-medicine.component';
import { AddMedicineRoutingModule } from './add-medicine-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddMedicineComponent],
  imports: [
    CommonModule,
    AddMedicineRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AddMedicineModule { }
