import { useCart } from '../../contexts';

export const Cart = () => {
  const { state } = useCart();
  const { cartItems } = state;
  return (
    <div>
      <h1 className='text-xl text-center m-xl-tb'>Cart</h1>
      <p className='text-center'>items in cart: {cartItems.length}</p>
    </div>
  );
};
