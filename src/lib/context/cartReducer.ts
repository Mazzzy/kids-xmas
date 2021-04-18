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
    case 'ADD_PRODUCT_TO_USER': {
      const newProdUserMap = [...state.productsToUserMap];
      const userID = action.payload.userId;
      const productID = action.payload.productId;
      const isIdExist = newProdUserMap.findIndex((element) => element.userId === userID);
      if (isIdExist !== -1) {
        const foundElem = newProdUserMap[isIdExist];
        const isProductPresent = foundElem.productIds.includes(productID);
        if (!isProductPresent) {
          foundElem.productIds.push(productID);
        }
      } else {
        newProdUserMap.push({ userId: userID, productIds: [productID] });
      }
      return {
        ...state,
        productsToUserMap: newProdUserMap,
      };
    }

    case 'REMOVE_PRODUCT_TO_USER': {
      let newProdUserMap = state.productsToUserMap;
      const productID = action.payload;
      newProdUserMap.map((ele) => {
        ele.productIds = ele.productIds.filter((x) => x !== productID);
      });

      return {
        ...state,
        productsToUserMap: newProdUserMap,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
