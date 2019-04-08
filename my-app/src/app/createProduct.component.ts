import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Product } from './product';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './createProduct.component.html',
 //styleUrls: ['./posts.component.scss']
})

export class CreateProductComponent {

productForm = this.fb.group({
    name: [''],
    description: [''],
    price: [''],
    discounted_price: [''],
    display: ['']});

  constructor(private fb: FormBuilder,private dataService: DataService) {
    }

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.productForm.value);
      this.dataService.addProduct(this.productForm.value).subscribe(product => console.log("Created successfully!"));
    }

}
