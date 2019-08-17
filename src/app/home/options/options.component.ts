import { AfterContentInit, Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { CommonDataService } from 'src/app/commonData.service';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements AfterContentInit, OnInit {

  @Input() optionsData: any;
  orderedData: any
  detailsData: any;
  arrayOptions = [];

  @ContentChildren(CustomerComponent) customerObj: QueryList<CustomerComponent>;

  constructor(private commonService: CommonDataService) { 
   
  }

  ngOnInit() {
  }

  ngAfterContentInit() {

  }
  onOrderClick(data: any) {
    this.orderedData = data.order;
    this.commonService.onOrderDataEvent(this.orderedData)
  }

  onDetailsClick(data: any) {
    this.detailsData = data.customerDetails;
    this.commonService.onDetailsDataEvent(this.detailsData);
  }

  deleteData(data: any) {
    this.commonService.removeData(data);
    this.optionsData.forEach((item: any, index: number) => {
      if (data.customerDetails[0].personName === item.customerDetails[0].personName) {
        this.optionsData.splice(index, 1);
      }
    });

    
  }
}
