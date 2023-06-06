import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsComponent } from './product-details.component';

describe('ProductsDetailsComponent', () => {
  let component: ProductsDetailsComponent;
  let fixture: ComponentFixture<ProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
