import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  baseUrl:string = "http://localhost:8090";

  constructor(private httpClient : HttpClient) {

  }

  get_products(){
    return this.httpClient.get(this.baseUrl + '/showAllProducts')
  }

  get_product(id){
      return this.httpClient.get(this.baseUrl + '/showProducts/'+id)
    }

   updateProduct(product: Product, name: string, id) {
    product.name=name;
     return this.httpClient.put(this.baseUrl + '/updateProduct/'+id,
     {
     "name":  name,
     });
   }

   deleteProduct(id) : Observable<{}>  {
        console.log("Delete inside service");
        return this.httpClient.delete(this.baseUrl + '/deleteProduct/'+id);
      }

    addProduct(product): Observable<any> {
       return this.httpClient.post(this.baseUrl + '/createProduct',
       {
         "name": product.name,
           "description": product.description,
           "price": product.price,
           "discounted_price": product.discounted_price,
           "display": product.display
       });

    }

}
