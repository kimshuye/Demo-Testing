import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {NgForm} from '@angular/forms';

import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  quantity: any;
  product: any;

  constructor(private route: ActivatedRoute
    ,         private productsServices: ProductsService
  ) {

  }

  ngOnInit() {
    this.quantity = 1;
    this.sub = this.route.params.subscribe(params => {
       this.id = +params.id; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.

       this.product = this.productsServices.getDataByID(this.id);
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
