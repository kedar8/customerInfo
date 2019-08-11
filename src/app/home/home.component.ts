import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onNodeClick(data: any) {
    this.router.navigate([data.link]);    
  }
  onButtonClick() {
    this.router.navigate(['/login']);
  }

}
