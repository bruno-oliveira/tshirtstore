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
}
