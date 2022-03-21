export const isAlreadyInWishlist = (wishlist, itemInfo) =>
  wishlist.find(({ _id }) => _id === itemInfo._id);
