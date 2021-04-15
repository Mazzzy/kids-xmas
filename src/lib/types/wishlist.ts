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

export interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}
