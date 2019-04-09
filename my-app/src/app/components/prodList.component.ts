import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../service/data.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-root',
  templateUrl: '../components/prodList.component.html',
})
export class ProdListComponent1 {

  private products : Product[] = [];
  private productsObservable : Observable<Product[]> ;

  constructor(private dataService: DataService){

    this.dataService.get_products().subscribe((res : Product[])=>{
          console.log(res);
          this.products = res;
        });
  }

 deleteItem(id: number) {
            console.log("Inside delete "+id);
            var ind = this.products.findIndex(product=>product.product_id==id);
            console.log(ind);
             if(confirm("Are you sure to delete item with id "+id)) {
               this.products.splice(ind, 1);
               this.dataService.deleteProduct(id).subscribe();
             }
           }
}
