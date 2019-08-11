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
    // console.log('order', data);

    this._commonService.orderMessage.subscribe((element: any) => {
      this.orderFlag = true;
      this.customerDetailsFlag = false;
      this.customerOrder = element;


    });

    this._commonService.customerDetailsMessage.subscribe((item: any) => {
      this.customerDetailsFlag = true;
      this.orderFlag = false;
      this.customerDetailsData = item;


    })



  }
  orderDetials(data: any) {


  }

}
