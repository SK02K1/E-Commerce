export const getCartDetails = (cartItems) =>
  cartItems.reduce(
    (cartDetails, { qty, price }) => ({
      ...cartDetails,
      totalItems: cartDetails.totalItems + qty,
      totalPrice: Number(
        (Number(cartDetails.totalPrice) + qty * price).toFixed(2)
      ),
    }),
    { totalItems: 0, totalPrice: 0, discount: 15, deliveryCharges: 20 }
  );
