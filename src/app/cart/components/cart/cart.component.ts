import { CartItem } from './../../../models/cart';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/order';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts?: CartItem[] = [];
  total: number = 0;
  success: boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartProducts();
    this.getCartTotal();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    console.log(this.cartProducts);
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts!) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  plusAmount(i: number) {
    this.cartProducts![i].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  minusAmount(i: number) {
    this.cartProducts![i].quantity--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  detectChanges() {
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deleteProduct(i: number) {
    this.cartProducts?.splice(i, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearShoppingCart() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  isEmpty(): boolean {
    return this.cartProducts?.length == 0;
  }

  addToCart() {
    this.success = false;
    let products = this.cartProducts!.map((element) => {
      return {
        productId: element.item.id,
        quantity: element.quantity,
      };
    });

    let order: Order = {
      id: 1,
      userId: 5,
      date: new Date(),
      products: products,
    };

    this.cartService.placeOrder(order).subscribe(
      (res) => {
        this.success = true;
        console.log(res);
        this.clearShoppingCart();
      },
      (error) => {
        this.success = false;
        alert(error.message);
        console.log(error);
      }
    );

    console.log(order);
  }
}
