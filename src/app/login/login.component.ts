import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonDataService} from '../commonData.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userRegistration:UserRegistration;
 loginArray = {
      "customerDetails": [
        {
          "personName": "",
          "selected": false,
          "city": "",
          "email": "",

        }
      ],
      "order": [
        {
          "orderNo": 'A444',
          "orderName": 'Mobile',
          "orderDetails": ' Apple Mobile'
        }
      ]
 };

  constructor(private router: Router, private _common: CommonDataService) {
    this.userRegistration = new UserRegistration();
  }
  ngOnInit() {
   
  }
  onLoginNavClick() {
    this.router.navigate(['/home/dashboard']);
  }

  onLoginBtnClick() {   
    this.loginArray.customerDetails[0].personName = this.userRegistration.firstName;
    this.loginArray.customerDetails[0].email = this.userRegistration.email;
    this._common.CommonData(this.loginArray);
    this.router.navigate(['/home/customer']);
  }
}

export class UserRegistration {
  firstName: string;
  email: string;
  constructor() {}
   
  }
