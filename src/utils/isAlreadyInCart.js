export const isAlreadyInCart = (cart, itemInfo) =>
  cart.find(({ id }) => id === itemInfo.id);
