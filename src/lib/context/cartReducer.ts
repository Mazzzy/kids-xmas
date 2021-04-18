import type { InitContext } from './provider';

const cartReducer = (state: InitContext, action: any) => {
  switch (action.type) {
    case 'REMOVE_PRODUCT': {
      const newCart = state.cart.filter((x) => x.id !== action.payload);
      const newTotalItems = newCart.length;
      const newTotalAmount = newCart.reduce((acc, currentProduct) => {
        return acc + currentProduct.price * currentProduct.quantity;
      }, 0);
      return {
        ...state,
        cart: newCart,
        totalItems: newTotalItems,
        totalAmount: newTotalAmount,
      };
    }
    case 'ADD_PRODUCT': {
      const newCart = [...state.cart];
      const productID = action.payload.id;
      const productQty = action.payload.quantity;
      const isExist = newCart.findIndex((element) => element.id === productID);
      if (isExist !== -1) {
        newCart[isExist].quantity += productQty;
      } else {
        newCart.push(action.payload);
      }
      const newTotalItems = newCart.length;
      const newTotalAmount = newCart.reduce((acc, currentProduct) => {
        return acc + currentProduct.price * currentProduct.quantity;
      }, 0);

      return {
        ...state,
        cart: newCart,
        totalItems: newTotalItems,
        totalAmount: newTotalAmount,
      };
    }
    case 'ADD_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'ADD_ACTIVE_TAB':
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
