export const isAlreadyInCart = (cart, itemInfo) =>
  cart.find(({ _id }) => _id === itemInfo._id);
