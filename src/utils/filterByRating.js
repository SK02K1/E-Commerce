export const filterByRating = (data, state) =>
  data.filter(({ rating }) => rating >= state.rating);
