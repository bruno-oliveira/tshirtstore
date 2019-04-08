import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './data.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './prodList.component.html',
})
export class ProdListComponent1 {

  private products : Product[] = [];
  private productsObservable : Observable<Product[]> ;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute){

    this.dataService.get_products().subscribe((res : Product[])=>{
          console.log(res);
          this.products = res;
        });
  }

 deleteItem(id: number) {
            console.log("Inside delete "+id);
             if(confirm("Are you sure to delete item with id"+id)) {
               console.log("Implement delete functionality here");
               this.products.splice(id-1, 1);
               this.dataService.deleteProduct(id).subscribe();
             }
           }
}
