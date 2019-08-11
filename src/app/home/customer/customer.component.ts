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
      "data": [
        {
          "customerDetails": [
            {
              "personName": "Kailas joshi",
              "selected": false,
              "city": "pune",
              "email": "kailas@gmail.com",

            }
          ],
          "order": [
            {
              "orderNo": 'A111',
              "orderName": 'Bag',
              "orderDetails": ' Sky Bag'
            }
          ]
        },
        {
          "customerDetails": [
            {
              "personName": "Pooja kokil",
              "email": "Pooja@gmail.com",
              "city": "kolhapur",

              "selected": false,
            }
          ],
          "order": [
            {
              "orderNo": 'A222',
              "orderName": 'Bike',
              "orderDetails": ' Pulsar Bag'
            }
          ]
        },
        {
          "customerDetails": [
            {

              "personName": "Kalyani kasar",
              "email": "Kalyani@gmail.com",
              "city": "satara",
              "selected": false,
            }
          ],
          "order": [
            {
              "orderNo": 'A333',
              "orderName": 'Watch',
              "orderDetails": ' Titan Watch'
            }
          ]

        }
      ]
    }
  }

  ngOnInit() {
    this._CommonData.currentMessage.subscribe((shareData: any) => {
      debugger;
      if (shareData) {
        shareData.forEach((element: any) => {
          let customerDetails = [
            {
              personName: element.firstName,
              city: element.city,
              email: element.email,
            }

          ]
          let order = [
            {
              "orderNo": 'A444',
              "orderName": 'Mobile',
              "orderDetails": ' Apple Mobile'
            }
          ]
          this.listOfCustomer.data.push({ customerDetails, order });
        });
      }
    });
  }

  onNameClick(item: any) {
    debugger;
    this.options = true;
    this.fullData = this.listOfCustomer.data;
    this.orderData.push(item);
    this.onClick.emit(item);
  }
  deleteData(data: any) {
    
    this.fullData.forEach((element: any) => {
      debugger;
      if(element.selected === data.selected) {
        debugger;
        this.fullData.splice(element,1);
      }
    });
    console.log('adadada', data);

  }
}
