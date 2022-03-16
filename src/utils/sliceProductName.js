export const sliceProductName = (productName) =>
  [...productName].slice(0, 30).concat('...').join('');
