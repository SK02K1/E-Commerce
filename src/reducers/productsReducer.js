import { FILTER_ACTIONS } from '../utils/index';

export const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_ACTIONS.SORT_BY_PRICE:
      return { ...state, sortByPrice: payload.sortByPrice };

    default:
      return { ...state };
  }
};
