import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Product } from './product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
 //styleUrls: ['./posts.component.scss']
})




export class EditComponent implements OnInit {
 private product : Product;
 private pid : Number;
 private productsObservable : Observable<Product[]> ;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
       this.route.params.subscribe( params => this.pid=params.id);
        this.dataService.get_product(this.pid).subscribe((res : Product)=>{
                     console.log(res);
                     this.product = res;
                   });
    }

  ngOnInit() {

  }

}