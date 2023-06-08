import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() item: Product | any = {};
  @Output('addedItem') addedItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  add() {
    this.addedItem.emit(this.item);
  }
}
