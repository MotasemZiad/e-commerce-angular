import { Product } from './product';

export interface CartItem {
  item: Product;
  quantity: number;
}
