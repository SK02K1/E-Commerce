import { FILTER_ACTIONS } from '../utils/index';
import { initialState } from '../contexts/products-context';

export const productsReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_ACTIONS.SORT_BY_PRICE:
      return { ...state, sortByPrice: payload.sortByPrice };

    case FILTER_ACTIONS.TOGGLE_RATING:
      return { ...state, rating: payload.rating };

    case FILTER_ACTIONS.TOGGLE_CATEGORIES:
      return state.categories.includes(payload.category)
        ? {
            ...state,
            categories: state.categories.filter(
              (category) => category !== payload.category
            ),
          }
        : { ...state, categories: state.categories.concat(payload.category) };

    case FILTER_ACTIONS.UPDATE_PRICE_RANGE:
      return { ...state, price: payload.price };

    case FILTER_ACTIONS.CLEAR_FILTERS:
      return { ...initialState };

    default:
      return { ...state };
  }
};
