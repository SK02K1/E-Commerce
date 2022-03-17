export const getFilteredData =
  (...filterFunctions) =>
  (data, state) =>
    filterFunctions.reduce(
      (filteredData, filterFunction) => filterFunction(filteredData, state),
      data
    );
