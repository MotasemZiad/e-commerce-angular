import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [AllProductsComponent, ProductsDetailsComponent],
  imports: [CommonModule],
})
export class ProductsModule {}
