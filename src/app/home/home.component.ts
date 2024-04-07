import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Customers } from '../Customers';
import { UtilMethods } from '../Utilities/util-methods';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedin: boolean;
  currentUserInfo: Customers;
  constructor(public r: Router, public util: UtilMethods) { }
  ngOnInit() {
    this.checkdata();
  }
  check() {
    this.r.navigate(['contact']);
  }
  homenav(value: any) {
    this.r.navigate(['homesearch', value]);
  }

  checkdata() {
    this.util.checkdata();
    this.currentUserInfo = this.util.currentUserInfo;
    this.loggedin = this.util.loggedin;
  }

}
