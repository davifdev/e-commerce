import type { Product } from "./product-type";

export interface Category {
  id: string;
  name: string;
  displayName: string;
  imageUrl: string;
  products: Product[];
}
