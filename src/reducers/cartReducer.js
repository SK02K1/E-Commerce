import { CART_ACTIONS } from '../utils';
export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.INITIALIZE_CART:
      return { ...state, cartItems: payload.cart };
    default:
      return { ...state };
  }
};
