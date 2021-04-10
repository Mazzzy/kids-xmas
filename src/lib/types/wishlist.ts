interface ProductItem {
  productId: number;
  quantity: number;
}

export interface WishItem {
  id: number;
  userId: number;
  date: string;
  products: ProductItem[];
}
