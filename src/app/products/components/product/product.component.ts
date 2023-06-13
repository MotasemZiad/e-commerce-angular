import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() item: any = {};
  @Output('addedItem') addedItem = new EventEmitter();
  addButton: boolean = false;
  amount: number = 1;
  constructor() {}

  ngOnInit(): void {}

  add() {
    this.addedItem.emit({ item: this.item, quantity: this.amount });
  }

  toggleButton() {
    this.addButton = !this.addButton;
  }
}
