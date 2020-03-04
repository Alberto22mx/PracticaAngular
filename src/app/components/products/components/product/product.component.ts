import { Component, OnInit } from '@angular/core';
import { CoreModule } from './../../../../core/core.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private products: CoreModule
  ) { }

  ngOnInit(): void {
    console.log(this.products);
    console.log("Todo bien");
  }

}
