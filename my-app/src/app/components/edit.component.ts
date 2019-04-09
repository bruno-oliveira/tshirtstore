import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../product/product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: '../components/edit.component.html',
 //styleUrls: ['./posts.component.scss']
})





export class EditComponent implements OnInit {
 private product : Product;
 private pid : Number;
 private prodName : string;
 private productsObservable : Observable<Product[]> ;
  private name = new FormControl('');

  constructor(private route: ActivatedRoute, private dataService: DataService,private router: Router) {
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
     console.log("The res is "+res);
      this.router.navigate(['']);
     });
    }

  ngOnInit() {
    this.prodName='';
  }

}
