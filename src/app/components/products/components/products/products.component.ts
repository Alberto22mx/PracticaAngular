import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() product: Product;

  constructor( ) { }

  ngOnInit(): void {
    
    console.log("S");
  }

}
