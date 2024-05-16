import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../shared/Models/ProductModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsList: ProductModel[] = [];

  categoriesList: String[] = [
    'Popular food',
    'Fruit',
    'Vegetables',
    'Meats',
    'Fish',
  ];


  

  ngOnInit(): void {
    var baseUrl = './assets/products/';
    for (let i = 0; i <= 5; i++) {
      baseUrl = baseUrl + i + '.png';
      this.productsList.push({
        image: baseUrl,
        id: i,
        price: this.randomNumber(10, 70 ),
        name: 'Product',
      });
      var baseUrl = './assets/products/';
    }
  }

  randomNumber(minimum: number, maximum: number) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
  }
}
