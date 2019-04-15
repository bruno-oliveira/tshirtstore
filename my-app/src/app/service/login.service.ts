import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse,HttpHeaders  } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {map,retry,catchError} from 'rxjs/operators';

@Injectable()
export class LoginService {
  baseUrl:string = "http://localhost:8090";
  private model: any = {};

  constructor(private http : HttpClient,private route: ActivatedRoute,private router: Router) {

  }

  login(model){
  const headers = new HttpHeaders();
  this.model=model;
   let url = 'http://localhost:8090/login';
          let result = this.http.post<string>(url, {
              username: this.model.username,
              pass: this.model.password
          },{ responseType: 'text' as 'json'}).subscribe(res => console.log("res is "+res));
  }
  }
