import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Product } from '../../../../models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  adCart() {
    this.productClicked.emit(this.product.id);
  }
}
