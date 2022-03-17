export const filterByPrice = (data, state) =>
  data.filter(({ price }) => price <= state.price);
