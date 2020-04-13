import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public medicineList = [];
  public tableData = [];
  public isModalShow = false;
  public modalDisplay = "none";
  public selectedItem = undefined;

  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit() {
    let tableData = localStorage.getItem("tableData");
    if (tableData) {
      this.tableData = JSON.parse(tableData);
    }
    this.getMedicineData();
  }

  getMedicineData() {
    this.homeService.getMedicineList().subscribe(
      result => {
        if (result) {
          this.medicineList = result["data"];
        }
      },
      error => {}
    );
  }

  quickAddClicked(event) {
    if (this.tableData.length > 0) {
      let indexNo = -1;
      this.tableData.forEach((val, index) => {
        if (val.id == event.id) {
          indexNo = index;
        }
      });
      if (indexNo > -1) {
        this.tableData[indexNo].quantity += event.quantity;
        localStorage.setItem("tableData", JSON.stringify(this.tableData));
      } else {
        this.tableData.unshift(event);
        localStorage.setItem("tableData", JSON.stringify(this.tableData));
      }
    } else {
      this.tableData.unshift(event);
      localStorage.setItem("tableData", JSON.stringify(this.tableData));
    }
  }

  deleteItem(item) {
    this.isModalShow = true;
    this.modalDisplay = "block";
    this.selectedItem = item;
  }

  closeModal() {
    this.isModalShow = false;
    this.modalDisplay = "none";
  }

  deleteConfirm() {
    this.closeModal();
    let indexNo = 0;
    this.tableData.forEach((val, key) => {
      if (val.id == this.selectedItem.id) {
        indexNo = key;
      }
    });
    this.tableData.splice(indexNo, 1);
    localStorage.setItem("tableData", JSON.stringify(this.tableData));
  }
}
