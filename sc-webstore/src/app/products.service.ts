import { Injectable } from '@angular/core';

import * as data from '../assets/data/databases.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any = (data as any).default;

  constructor(){}

  getData(){
    return this.products;
  }
}
