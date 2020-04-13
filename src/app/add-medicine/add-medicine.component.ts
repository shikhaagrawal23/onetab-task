import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddMedicineComponent implements OnInit {

  otForm: FormGroup;
  formSubmitted = false;
  navigationExtras: NavigationExtras;
  public isUpdate = false;
  public editId;

  constructor(public formBuilder: FormBuilder, private _location: Location,  private a_route: ActivatedRoute ) { }

  ngOnInit() {
    this.buildForm();
    let tableData = JSON.parse(localStorage.getItem('tableData'));
    this.a_route.paramMap.subscribe((params)=>{
     this.editId = params.get('id');
     if(this.editId){
       tableData.forEach((val,key)=>{
         if(val.id ==this.editId) {
           this.isUpdate = true;
           this.otForm.get('id').setValue(val.id);
           this.otForm.get('name').setValue(val.name);
           this.otForm.get('desc').setValue(val.desc);
           this.otForm.get('quantity').setValue(val.quantity);
           this.otForm.get('price').setValue(val.price);
         }
       })
     }
    });

    this.a_route.queryParams.subscribe((params) => {
      let cloneId = params['cloneId']
      tableData.forEach((val,key)=>{
        if(val.id == cloneId) {
          this.otForm.get('name').setValue(val.name);
          this.otForm.get('desc').setValue(val.desc);
          this.otForm.get('quantity').setValue(val.quantity);
          this.otForm.get('price').setValue(val.price);
        }
      })
    })
  }

  addMedicine() {
    this.otForm.value.id = (new Date()).getTime();
    if(localStorage.getItem('tableData')) {
      let tableData = JSON.parse(localStorage.getItem('tableData'));
      tableData.unshift(this.otForm.value);
      localStorage.setItem('tableData', JSON.stringify(tableData));
    } else {
      localStorage.setItem('tableData', JSON.stringify([this.otForm.value]));
    }
    alert("medicine has been added successfully");
    this._location.back();
  }

  updateMedicine() {
    let tableData = JSON.parse(localStorage.getItem('tableData'));
    let indexNo = -1;
    tableData.forEach((val, key) => {
      if(val.id == this.editId){
        indexNo = key;
      }
    })
    tableData[indexNo] = this.otForm.value;
    localStorage.setItem('tableData', JSON.stringify(tableData));
    alert("medicine has been updated successfully");
    this._location.back();
  }

  buildForm() {
    this.otForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      desc: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;
    if (this.otForm.valid) {
      if(this.isUpdate){
        this.updateMedicine()
      }else{
        this.addMedicine();
      }
    }
  }

}
