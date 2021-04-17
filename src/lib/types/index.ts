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
  image: string;
  price: number;
  title: string;
}

export type ProductLocal = Product & { quantity: number };

export type QuickPreview = {
  id: number;
  price: number;
  image: string;
  title: string;
};
