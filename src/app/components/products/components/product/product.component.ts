import { Component, OnInit } from '@angular/core';
import { ServiceslocalService } from './../../../../core/services/servicelocal/serviceslocal.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productos: Array<any> = [];
  constructor(
    public products: ServiceslocalService
   ) { }

  ngOnInit(): void {
    this.productos = this.products.getAllProducts();
  }

}
