import { FILTER_ACTIONS } from '../utils/index';

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
    default:
      return { ...state };
  }
};
