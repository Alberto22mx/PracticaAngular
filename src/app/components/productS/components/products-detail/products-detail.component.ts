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
      id: '3',
      title: 'Mug',
      image: 'assets/images/mug.png',
      price: 7000,
      description: 'Nuevo producto'
    };
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
    };
    this.productsService.updateProduct('2', updateProduct).subscribe(product => {
    console.log(product);
    });
  }

  deleteProduct(){
    this.productsService.deleteProduct('1').subscribe(product => {
    console.log(product);
    });
  }

}


//{"id":"1","image":"assets/images/camiseta.png","title":"Camiseta","price":80000,"description":"bla bla bla bla bla"}{"id":"2","image":"assets/images/hoodie.png","title":"Hoodie","price":5555,"description":"edicion titulo 2"},{"id":"4","title":"Pin","image":"assets/images/pin.png","price":7000,"description":"Nuevo producto"}