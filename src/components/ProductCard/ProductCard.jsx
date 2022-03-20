import { sliceProductName, isAlreadyInCart } from '../../utils';
import { useAuth, useCart } from '../../contexts';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { handleAddToCart } from '../../services';

export const ProductCard = ({ itemInfo }) => {
  const { name, price, img, rating } = itemInfo;
  const [isAdding, setIsAdding] = useState();
  const { encodedToken } = useAuth();
  const {
    cartState: { cartItems },
    dispatchCart,
  } = useCart();
  const navigate = useNavigate();

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
        {isAlreadyInCart(cartItems, itemInfo) ? (
          <Link className='btn btn-primary card-btn' to='/cart'>
            Go to cart
          </Link>
        ) : (
          <button
            onClick={(e) =>
              handleAddToCart({
                itemInfo,
                encodedToken,
                dispatchCart,
                setIsAdding,
                navigate,
              })
            }
            className='btn btn-secondary card-btn'
            disabled={isAdding}
          >
            {isAdding ? (
              <ClipLoader size={15} color='#fff' speedMultiplier={2} />
            ) : (
              'Add to cart'
            )}
          </button>
        )}
      </div>
    </div>
  );
};
