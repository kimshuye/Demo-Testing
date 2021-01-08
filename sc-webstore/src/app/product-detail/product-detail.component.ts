import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  quantity: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.quantity = 1;
    this.sub = this.route.params.subscribe(params => {
       this.id = +params.id; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  onSubmit(productTemp: NgForm) {
    console.log(productTemp.value);  // { first: '', last: '' }
    console.log(productTemp.valid);  // false
    console.log(this.quantity);  // false
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
