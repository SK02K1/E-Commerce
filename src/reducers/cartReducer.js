import { CART_ACTIONS } from '../utils';
export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.INITIALIZE_CART:
      return { ...state, cartItems: payload.cart };

    case CART_ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cartItems: payload.updatedCart,
      };

    case CART_ACTIONS.REMOVE_FROM_CART:
      return { ...state, cartItems: payload.updatedCart };

    case CART_ACTIONS.ITEM_QUANTITY_CHANGE:
      return { ...state, cartItems: payload.updatedQuanityCart };

    default:
      return { ...state };
  }
};
