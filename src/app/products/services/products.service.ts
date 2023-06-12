import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseApi}/products`);
  }

  getAllCategories(): Observable<Category> {
    return this.http.get<Category>(
      `${environment.baseApi}/products/categories`
    );
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.baseApi}/products/category/${category}`
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseApi}/products/${id}`);
  }
}
