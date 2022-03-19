import { CartItemCard } from '../../components';
import { useCart } from '../../contexts';

export const Cart = () => {
  const { state } = useCart();
  const { cartItems } = state;
  const itemsInCart = cartItems.length;

  return (
    <div>
      <h1 className='text-xl text-center m-xl-tb'>Cart ({itemsInCart})</h1>
      {cartItems.map((cartItem) => (
        <CartItemCard key={cartItem.id} product={cartItem} />
      ))}
    </div>
  );
};
