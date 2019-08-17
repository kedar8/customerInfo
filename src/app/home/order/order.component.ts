import { Component, OnInit, Input } from '@angular/core';
import { CommonDataService } from 'src/app/commonData.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  customerOrder: any;
  customerDetailsData: any;

  orderFlag: boolean;
  customerDetailsFlag: boolean;

  constructor(private _commonService: CommonDataService) { }

  ngOnInit() {
    this._commonService.orderMessage.subscribe((element: any) => {
      if (element) {
        this.orderFlag = true;
        this.customerDetailsFlag = false;
        this.customerOrder = element;

      } else {
        this.orderFlag = false;
        this.customerDetailsFlag = false;
      }

    });

    this._commonService.customerDetailsMessage.subscribe((item: any) => {
      if (item) {

        this.customerDetailsFlag = true;
        this.orderFlag = false;
        this.customerDetailsData = item;
      } else {
        this.customerDetailsFlag = false;
        this.orderFlag = false;
      }


    })



  }

}
