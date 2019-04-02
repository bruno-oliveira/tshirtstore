import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  baseUrl:string = "http://localhost:8090";

  constructor(private httpClient : HttpClient) {

  }

  get_products(){
    return this.httpClient.get(this.baseUrl + '/showAllProducts');
  }

}
