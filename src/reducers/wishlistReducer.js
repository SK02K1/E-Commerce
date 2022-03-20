import { WISHLIST_ACTIONS } from '../utils';

export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case WISHLIST_ACTIONS.INITIALIZE_WISHLIST:
      return { ...state, wishlist: payload.wishlist };
    default:
      return { ...state };
  }
};
