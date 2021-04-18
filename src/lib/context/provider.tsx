import { createContext, useReducer } from 'react';
import { Product, ProductLocal } from '@/lib/types';
import CartReducer from './cartReducer';

export interface InitContext {
  cart: ProductLocal[];
  totalItems: number;
  totalAmount: number;
  searchTerm: string;
  activeTab: string;
  removeProduct?: (id: number) => void;
  addProduct?: (selectedProducts: ProductLocal) => void;
  addSearchTerm?: (searchTerm: string) => void;
  addActiveTab?: (activeTab: string) => void;
}

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  searchTerm: '',
  activeTab: '',
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

  const addSearchTerm = (searchTerm: string) => {
    dispatch({
      type: 'ADD_SEARCH_TERM',
      payload: searchTerm,
    });
  };

  const addActiveTab = (activeTab: string) => {
    dispatch({
      type: 'ADD_ACTIVE_TAB',
      payload: activeTab,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        searchTerm: state.searchTerm,
        activeTab: state.activeTab,
        removeProduct,
        addProduct,
        addSearchTerm,
        addActiveTab,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
