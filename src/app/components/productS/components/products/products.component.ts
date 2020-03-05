import { Component, OnInit } from '@angular/core';

import { Product } from './../../../../models/products.model';
import { ProductsService } from './../../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log(`ID de producto desde otro componenete: ${id}`);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProdcut(id)
    .subscribe(product => {
      console.log(product);
    });
  }

}
