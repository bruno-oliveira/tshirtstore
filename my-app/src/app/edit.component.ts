import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
 //styleUrls: ['./posts.component.scss']
})
export class EditComponent implements OnInit {
  product$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
       this.route.params.subscribe( params => this.product$ = params.id );
    }

  ngOnInit() {
    this.data.get_product(this.product$).subscribe(
      data => this.product$ = data
    );
  }

}
