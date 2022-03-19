import axios from 'axios';
import { useState } from 'react';
import { CART_ACTIONS, sliceProductName } from '../../utils';
import { useAuth, useCart } from '../../contexts';
import './CartItemCard.css';
import { ClipLoader } from 'react-spinners';

export const CartItemCard = ({ product }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const { encodedToken } = useAuth();
  const { dispatch } = useCart();
  const { _id, name, price, qty, img } = product;
  const handleRemoveFromCart = async (itemID) => {
    setIsRemoving(true);
    try {
      const {
        data: { cart },
        status,
      } = await axios.delete(`/api/user/cart/${itemID}`, {
        headers: { authorization: encodedToken },
      });
      setIsRemoving(false);
      if (status === 200) {
        dispatch({
          type: CART_ACTIONS.REMOVE_FROM_CART,
          payload: { updatedCart: cart },
        });
      }
    } catch (error) {
      console.log(`Error in removing item from cart: ${error.message}`);
    }
  };
  return (
    <div className='card'>
      <div className='card-header m-xs-tb'>
        <img className='card-img m-xs-tb' src={img} alt={name} />
      </div>
      <div className='card-body m-xs-tb'>
        <h2 className='item-price m-xs-tb'>$ {price} USD</h2>
        <h3 className='card-title m-xs-tb'>
          {name.length >= 30 ? sliceProductName(name) : name}
        </h3>
      </div>
      <div className='card-footer m-xs-tb'>
        <div className='product-qty-controls'>
          <button className='btn btn-primary' disabled={true}>
            <span className='material-icons-outlined'> remove </span>
          </button>
          <div className='qty'>{qty}</div>
          <button className='btn btn-primary'>
            <span className='material-icons-outlined'> add </span>
          </button>
        </div>
        <button className='btn btn-secondary card-btn m-sm-t'>
          Move to wishlist
        </button>
        <button
          onClick={() => handleRemoveFromCart(_id)}
          className='btn btn-secondary outlined card-btn m-sm-t'
        >
          {isRemoving ? (
            <ClipLoader size={15} color='#282828' speedMultiplier={2} />
          ) : (
            'Remove from cart'
          )}
        </button>
      </div>
    </div>
  );
};
