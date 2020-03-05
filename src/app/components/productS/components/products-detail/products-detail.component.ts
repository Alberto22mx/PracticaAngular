import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../../../core/services/products/products.service';
import { Product } from './../../../../models/products.model';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.clickProducts();
  }
  clickProducts() {
    this.route.params.subscribe((params: Params) => {
      this.printProducts(params.id);
    });
  }

  printProducts(id: string) {
    this.productsService.getProdcut(id).subscribe(product => {
      this.product = product;
      console.log(this.product);
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '25',
      title: 'nuevo',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto'
    };
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

}
