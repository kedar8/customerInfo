
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class CommonDataService {

  RegisterData = [
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

  private messageSource = new BehaviorSubject<any>('');
  public currentMessage: Observable<any> = this.messageSource.asObservable();

  private orderSource = new BehaviorSubject<any>(null);
  public orderMessage: Observable<any> = this.orderSource.asObservable();

  private customerSource = new BehaviorSubject<any>(null);
  public customerDetailsMessage: Observable<any> = this.customerSource.asObservable();


  private listSource = new BehaviorSubject<any>('');
  public listMessage: Observable<any> = this.listSource.asObservable();

  constructor() {
    this.messageSource.next(this.RegisterData);
  }

  addData(data: any[]) {
    this.RegisterData = [];
    this.RegisterData = this.RegisterData.concat(data);
    this.messageSource.next(this.RegisterData);
  }
  CommonData(data: any) {
    debugger;
    this.RegisterData.push(data);
    this.messageSource.next(this.RegisterData);
  }
  onOrderDataEvent(item: any) {
    this.orderSource.next(item);

  }
  onDetailsDataEvent(data: any) {
    this.customerSource.next(data);
  }
  removeData(data: any) {
    this.RegisterData.forEach((element: any, index: number) => {
      if (data.customerDetails[0].personName === element.customerDetails[0].personName) {
        this.RegisterData.splice(index, 1);
        this.messageSource.next(this.RegisterData);
      }
    });
    this.orderSource.next(null);
    this.customerSource.next(null);
  }
}
