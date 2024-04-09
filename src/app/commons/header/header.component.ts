import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/Customers';
import { UtilMethods } from 'src/app/Utilities/util-methods';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public r: Router, public util: UtilMethods) { }

  loggedin: boolean;
  currentUserInfo: Customers;
  ngOnInit() {
    this.checkdata();
  }

  checkdata() {
    this.util.checkdata();
    this.currentUserInfo = this.util.currentUserInfo;
    this.loggedin = this.util.loggedin;
  }

  homenav(value: any) {
    this.r.navigate(['homesearch', value]);
  }

  logout() {
    this.util.logout();
  }

  adddetails(value: any) {
    this.r.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.r.onSameUrlNavigation = 'reload';
    this.r.navigate(['adddetails', value]);
  }
}
