import { sliceProductName, CART_ACTIONS } from '../../utils';
import { useAuth, useCart } from '../../contexts';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

export const ProductCard = ({ itemInfo }) => {
  const { name, price, img, rating } = itemInfo;
  const [isAdding, setIsAdding] = useState();
  const { encodedToken } = useAuth();
  const {
    state: { cartItems },
    dispatch,
  } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = async (product, e) => {
    e.stopPropagation();
    if (encodedToken) {
      setIsAdding(true);
      try {
        const {
          data: { cart },
          status,
        } = await axios.post(
          '/api/user/cart',
          {
            product,
          },
          {
            headers: {
              authorization: encodedToken,
            },
          }
        );

        if (status === 201) {
          dispatch({
            type: CART_ACTIONS.ADD_TO_CART,
            payload: { updatedCart: cart },
          });
        }
      } catch (error) {
        console.log(`Error in adding product to cart: ${error.message}`);
      } finally {
        setIsAdding(false);
      }
    } else {
      navigate('/login');
    }
  };
  return (
    <div className='card'>
      <span className='material-icons-outlined card-icon-like'>
        favorite_border
      </span>
      <div className='card-header m-xs-tb'>
        <img className='card-img m-xs-tb' src={img} alt={name} />
      </div>
      <div className='card-body m-xs-tb'>
        <h2 className='item-price m-xs-tb'>$ {price} USD</h2>
        <h3 className='card-title m-xs-tb'>
          {name.length >= 30 ? sliceProductName(name) : name}
        </h3>
        <h4 className='text-sm'>{rating}/5</h4>
      </div>
      <div className='card-footer m-sm-tb'>
        {cartItems.find(({ id }) => id === itemInfo.id) ? (
          <Link className='btn btn-primary card-btn' to='/cart'>
            go to cart
          </Link>
        ) : (
          <button
            onClick={(e) => handleAddToCart(itemInfo, e)}
            className='btn btn-secondary card-btn'
          >
            {isAdding ? (
              <ClipLoader size={15} color='#fff' speedMultiplier={2} />
            ) : (
              'add to cart'
            )}
          </button>
        )}
      </div>
    </div>
  );
};
