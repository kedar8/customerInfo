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

  RegisterData = [];
  constructor(private router: Router, private _common: CommonDataService) {
    this.userRegistration = new UserRegistration();
  }
  ngOnInit() {
  }
  onLoginNavClick() {
    this.router.navigate(['/home/dashboard']);
  }

  onLoginBtnClick() {    

    this.RegisterData.push(this.userRegistration);
    this._common.CommonData(this.RegisterData);
    this.router.navigate(['/home/customer']);
    
  }
  // keyPress(event: any) {
  //   const pattern = /[0-9\+\-\ ]/;

  //   let inputChar = String.fromCharCode(event.charCode);
  //   if (event.keyCode != 8 && !pattern.test(inputChar)) {
  //     event.preventDefault();
  //   }
  // }
}

export class UserRegistration {
  firstName: string;
  email: string;
  constructor() {}
   
  }
