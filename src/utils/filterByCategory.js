export const filterByCategory = (data, state) =>
  state.categories.length
    ? data.filter(({ type }) => state.categories.includes(type))
    : data;
