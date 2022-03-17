import { FILTER_ACTIONS } from '../utils/index';

export const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_ACTIONS.SORT_BY_PRICE:
      return { ...state, sortByPrice: payload.sortByPrice };
    case FILTER_ACTIONS.TOGGLE_RATING:
      return { ...state, rating: payload.rating };
    default:
      return { ...state };
  }
};
