
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class CommonDataService {
  private messageSource = new BehaviorSubject<any>('');
  public currentMessage: Observable<any> = this.messageSource.asObservable();

  private orderSource = new BehaviorSubject<any>(null);
  public orderMessage: Observable<any> = this.orderSource.asObservable();

  private customerSource = new BehaviorSubject<any>(null);
  public customerDetailsMessage: Observable<any> = this.customerSource.asObservable();


  private listSource = new BehaviorSubject<any>('');
  public listMessage: Observable<any> = this.listSource.asObservable();

  RegisterData: any = [];

  constructor() {

  }

  addData(data: any) {
    this.RegisterData = [];
    this.RegisterData = data;
    this.messageSource.next(this.RegisterData);
  }
  CommonData(data: any) {
    
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
