import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  product?: Product;
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.id);
    this.getProductById();
  }

  getProductById() {
    this.loading = true;

    this.service.getProductById(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.product = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        console.log(error);
        alert(error.message);
      }
    );
  }
}
