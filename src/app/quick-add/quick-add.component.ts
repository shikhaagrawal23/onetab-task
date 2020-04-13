import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-quick-add",
  templateUrl: "./quick-add.component.html",
  styleUrls: ["./quick-add.component.scss"]
})
export class QuickAddComponent implements OnInit {
  public quantity = 0;
  public selectedItem;
  public formSubmited = false;
  @Input("listData") listData;
  @Output("quickAddSubmit") quickAddSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  add() {
    this.formSubmited = true;
    if (this.quantity && this.selectedItem) {
      let finalObj = { ...this.selectedItem, quantity: this.quantity };
      this.quickAddSubmit.emit(finalObj);
      this.quantity = 0;
      this.selectedItem = "";
      this.formSubmited = false;
    }
  }
}
