import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class LoginService {
  baseUrl:string = "http://localhost:8090";
  private model: any = {};

  constructor(private http : HttpClient,private route: ActivatedRoute,private router: Router) {

  }

  login(model){
  this.model=model;
   let url = 'http://localhost:8090/login';
          let result = this.http.post(url, {
              userName: this.model.username,
              password: this.model.password
          }).
          subscribe(isValid => {
              if (isValid) {
                  sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
                  this.router.navigate(['']);
              } else {
                  alert("Authentication failed.")
              }
          });
  }
  }
