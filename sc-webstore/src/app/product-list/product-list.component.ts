import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any[];

  constructor(private productsServices:ProductsService) {
    this.products = this.productsServices.getData()    
  }

  ngOnInit(): void {
    
  }

}
