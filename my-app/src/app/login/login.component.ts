import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'login',
    templateUrl: '../login/login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient, private loginService: LoginService) { }

    ngOnInit() {
        sessionStorage.setItem('token', '');
    }


    login() {
       this.loginService.login(this.model);
    }
}
