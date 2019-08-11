import { AfterContentInit,Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
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
  
  @ContentChildren(CustomerComponent) customerObj: QueryList<CustomerComponent>;

  constructor ( private commonService: CommonDataService) { }

  ngOnInit() {
  }

  ngAfterContentInit() 
  {
    // this.customerObj.toArray().forEach((obj: any) => {
    
    //   console.log('adadada', obj);
      
    // })

    // console.log('kedakakaka',this.customerObj);
    
  }
  onOrderClick(data: any) {
    this.orderedData =data.order;
    this.commonService.onOrderDataEvent(this.orderedData)
  }

  onDetailsClick(data: any) {
    this.detailsData = data.customerDetails;
    this.commonService.onDetailsDataEvent(this.detailsData);
  }



  deleteData(data: any) {
    console.log('kedar kokil ----',data);
    
    
    console.log('vrushu ---',this.commonService  );
    
   

    

  }
}
