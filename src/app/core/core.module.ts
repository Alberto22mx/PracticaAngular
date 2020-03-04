import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceslocalService } from './services/servicelocal/serviceslocal.service';
import { ProductsService } from './services/products/products.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ServiceslocalService,
    ProductsService
  ]
})
export class CoreModule { }
