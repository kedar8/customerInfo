
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class CommonDataService {
  private messageSource = new BehaviorSubject<any>('');
  public currentMessage: Observable<any> = this.messageSource.asObservable();

  private orderSource = new BehaviorSubject<any>('');
  public orderMessage: Observable<any> = this.orderSource.asObservable();

  private customerSource = new BehaviorSubject<any>('');
  public customerDetailsMessage: Observable<any> = this.customerSource.asObservable();


  private listSource = new BehaviorSubject<any>('');
  public listMessage: Observable<any> = this.listSource.asObservable();

  RegisterData: any = [];

  constructor() {

  }
 
  CommonData(data: any) {
    data.forEach(element => {
      this.RegisterData.push(element);
    });
    this.messageSource.next(this.RegisterData);
  }
  onOrderDataEvent(item: any) {
    this.orderSource.next(item);

  }
  onDetailsDataEvent(data: any) {
    this.customerSource.next(data);
  }


  deleteData() {
    
  }

}
