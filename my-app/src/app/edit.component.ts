import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Product } from './product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
 //styleUrls: ['./posts.component.scss']
})





export class EditComponent implements OnInit {
 private product : Product;
 private pid : Number;
 private prodName : string;
 private productsObservable : Observable<Product[]> ;
  name = new FormControl('');

  constructor(private route: ActivatedRoute, private dataService: DataService) {
       this.route.params.subscribe( params => this.pid=params.id);
        this.dataService.get_product(this.pid).subscribe((res : Product)=>{
                     console.log(res);
                     this.product = res;
                     this.prodName = this.product.name;
                     this.name.setValue(this.prodName);
                   });
    }

    updateName(){
    console.log("Updating name");
     this.dataService.updateProduct(this.product,this.name.value,this.pid).subscribe((res: any)=>{
     console.log(res);
     });
    }

  ngOnInit() {
    this.prodName='';
  }

}
