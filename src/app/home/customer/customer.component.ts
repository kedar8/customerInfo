import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from 'src/app/commonData.service';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerArray: any[];
  listOfCustomer: any;
  order = false;
  options = false;
  orderData = [];
  fullData: any;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private _CommonData: CommonDataService) {

    this.listOfCustomer = {
      "data": []
    }
  }

  ngOnInit() {
     this._CommonData.currentMessage.subscribe((shareData: any) => {
       debugger;
       this.listOfCustomer.data = shareData;
     });
  }

  onNameClick(item: any) {
    this.orderData = [];
    this.options = true;
    this.fullData = this.listOfCustomer.data;
    this.orderData.push(item);
    this.onClick.emit(item);
  }
}
