import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsComponent } from './components/products/products.component'
import { ProductComponent } from './components/product/product.component';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../material/material.module';

@NgModule({
  declarations: [
    ProductsDetailComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class ProductsModule { }
