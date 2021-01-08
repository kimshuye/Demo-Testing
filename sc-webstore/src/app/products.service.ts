import { Injectable } from '@angular/core';

import * as data from '../assets/data/databases.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any = (data as any).default;

  constructor(){}

  getDataByID(id){
    return this.products.filter(x => x.id === id)[0];
  }

  getData(){
    return this.products;
  }
}
