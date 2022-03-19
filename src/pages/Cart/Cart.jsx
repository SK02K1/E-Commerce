import { CartDetailsCard, CartItemCard } from '../../components';
import { useCart } from '../../contexts';
import './Cart.css';

export const Cart = () => {
  const { state } = useCart();
  const { cartItems } = state;
  const itemsInCart = cartItems.length;

  return (
    <div className='cart'>
      <main className='main-content'>
        <h1 className='text-lg text-center m-lg-tb'>My Cart ({itemsInCart})</h1>
        <div className='content-wrapper'>
          <div className='cart-items grid-container auto'>
            {cartItems.map((cartItem) => (
              <CartItemCard key={cartItem.id} product={cartItem} />
            ))}
          </div>
          <div className='cart-details'>
            {itemsInCart ? (
              <CartDetailsCard cartItems={cartItems} />
            ) : (
              <p className='text-center'>Cart is empty 🛒</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
