import { createContext, useReducer } from 'react';
import { Product, ProductLocal } from '@/lib/types';
import CartReducer from './cartReducer';

export interface InitContext {
  cart: ProductLocal[];
  totalItems: number;
  totalAmount: number;
  removeProduct?: (id: number) => void;
  addProduct?: (selectedProducts: ProductLocal) => void;
  bouceEnd?: () => void;
}

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
};

export const CartContext = createContext<InitContext>(initialState);
export const CartProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const removeProduct = (id: number) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: id,
    });
  };

  const addProduct = (selectedProducts: Product) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: selectedProducts,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        removeProduct,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
