import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  categories: string[] = [];
  products: Product[] = [];
  loading: boolean = false;

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  filterCategory(event: any) {
    let value: string = event.target.value;
    value.toLowerCase() === 'all'
      ? this.getProducts()
      : this.getProductsByCategory(value);
  }

  getProductsByCategory(category: string) {
    this.loading = true;

    this.service.getProductsByCategory(category).subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(`Error => ${error.status} ${error.message}`);
      }
    );
  }

  getProducts() {
    this.loading = true;

    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;

        alert(`Error => ${error.message}`);
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;

        alert(`Error => ${error.status} ${error.message}`);
      }
    );
  }
}
