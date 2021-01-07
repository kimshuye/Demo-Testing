import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: ''
    , component: ProductListComponent
  }
  // ,{
  //   path: 'product'
  //   ,component: ProductItemComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
