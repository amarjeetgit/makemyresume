import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from '../../environments/environment';
import { Customers } from "../Customers";

@Injectable({
    providedIn: 'root' // just before your class
})
export class UtilMethods implements OnInit {
    public env = environment;
    currentUserInfo: Customers;
    loggedin: boolean;
    constructor(private r: Router, @Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
    }

    checkdata() {
        let cUser = sessionStorage.getItem('user');
        if (cUser) {
            let currentUser: Customers = JSON.parse(cUser);
            this.currentUserInfo = currentUser;
            this.loggedin = true;
        }

    }

    logout() {
        sessionStorage.removeItem('user');
        this.document.location.href = '/home';

    }
}