import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllCarts(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.baseApi}/carts`);
  }
  placeOrder(order: Order): Observable<any> {
    return this.http.post(`${environment.baseApi}/carts`, order);
  }
}
