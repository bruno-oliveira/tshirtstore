import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { DataService } from '../service/data.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-root',
  templateUrl: '../components/prodList.component.html',
})
export class ProdListComponent1 implements OnInit {

  private products : Product[] = [];
  private productsObservable : Observable<Product[]> ;
  private displayedColumns;
  private dataSource;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService){

    this.dataService.get_products().subscribe((res : Product[])=>{
          console.log(res);
          this.products = res;
            this.displayedColumns = ['product_id','name','description','customColumn1','customColumn2'];
            this.dataSource = new MatTableDataSource(this.products);
        });
  }

  ngOnInit(){
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
