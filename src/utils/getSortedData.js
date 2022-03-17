export const getSortedData = (data, state) => {
  switch (state.sortByPrice) {
    case 'LOW_TO_HIGH':
      return [...data].sort((a, b) => a.price - b.price);

    case 'HIGH_TO_LOW':
      return [...data].sort((a, b) => b.price - a.price);

    default:
      return [...data];
  }
};
