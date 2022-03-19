import { CART_ACTIONS } from '../utils';
export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.INITIALIZE_CART:
      return { ...state, cartItems: payload.cart };
    case CART_ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.concat(payload.updatedCart),
      };
    default:
      return { ...state };
  }
};
