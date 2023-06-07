import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  categories: any[] = [];
  products: any[] = [];
  filteredProducts: any[] = [];
  loading: boolean = false;

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  filterCategory(event: any) {
    let value = event.target.value;
    value.toLowerCase() === 'all'
      ? this.getProducts()
      : this.getProductsByCategory(value);
  }

  getProductsByCategory(category: string) {
    this.loading = true;

    this.service.getProductsByCategory(category).subscribe(
      (res: any) => {
        console.log(`Products By ${category}:`, res);
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        console.log(error);
        alert(`Error => ${error.status} ${error.message}`);
      }
    );
  }

  getProducts() {
    this.loading = true;

    this.service.getAllProducts().subscribe(
      (res: any) => {
        console.log('Products: ', res);
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;

        console.log(error);
        alert(`Error => ${error.message}`);
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        console.log('Categories: ', res);
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;

        console.log(error);
        alert(`Error => ${error.status} ${error.message}`);
      }
    );
  }
}
