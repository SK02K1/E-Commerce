import { WISHLIST_ACTIONS } from '../utils';

export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case WISHLIST_ACTIONS.INITIALIZE_WISHLIST:
      return { ...state, wishlist: payload.wishlist };
    case WISHLIST_ACTIONS.UPDATE_WISHLIST:
      return { ...state, wishlist: payload.updatedWishlist };
    default:
      return { ...state };
  }
};
