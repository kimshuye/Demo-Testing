import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any[];


  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id: 2,
        name: '43 Piece dinner Set',
        gender: 'Female',
        age: '3 to 5',
        price: 12.95,
        quantity: 105,
        currency: 'USD',
        brand: 'CoolKidz',
        image_url: 'https://media.takealot.com/covers_images/7d2a25e2dd0140a58ca47642a9999215/s-zoom.file'
      }
      , {
        id: 1,
        name: 'Balance Training Bicycle',
        gender: 'Neutral',
        age: '3 to 5',
        price: 112.95,
        quantity: 50,
        currency: 'USD',
        brand: 'SportsFun',
        image_url: 'https://i.pinimg.com/originals/ab/7b/40/ab7b4094fb8e6674c19a82c03489edf0.jpg'
      }
    ];
  }

}
