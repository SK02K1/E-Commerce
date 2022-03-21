import { CartDetailsCard, CartItemCard } from '../../components';
import { useCart } from '../../contexts';
import './Cart.css';

export const Cart = () => {
  const { cartState } = useCart();
  const { cartItems } = cartState;
  const itemsInCart = cartItems.length;

  return (
    <div className='cart'>
      <main className='main-content'>
        <h1 className='text-lg text-center m-lg-tb'>My Cart ({itemsInCart})</h1>
        {!itemsInCart && <p className='text-center'>Cart is empty 🛒</p>}
        <div className='content-wrapper'>
          <div className='cart-items grid-container auto'>
            {cartItems.map((cartItem) => (
              <CartItemCard key={cartItem.id} product={cartItem} />
            ))}
          </div>
          <div className='cart-details'>
            {Boolean(itemsInCart) && <CartDetailsCard cartItems={cartItems} />}
          </div>
        </div>
      </main>
    </div>
  );
};
