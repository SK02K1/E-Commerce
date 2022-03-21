import {
  sliceProductName,
  isAlreadyInCart,
  isAlreadyInWishlist,
} from '../../utils';
import './ProductCard.css';
import { useAuth, useCart, useWishlist } from '../../contexts';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CardLoader } from '../Loader/CardLoader';
import {
  handleAddToCart,
  handleAddToWishlist,
  handleRemoveFromWishlist,
} from '../../services';

export const ProductCard = ({ itemInfo }) => {
  const { _id, name, price, img, rating } = itemInfo;
  const [showCardLoader, setShowCardLoader] = useState(false);
  const { encodedToken } = useAuth();
  const navigate = useNavigate();
  const {
    cartState: { cartItems },
    dispatchCart,
  } = useCart();
  const {
    wishlistState: { wishlist },
    dispatchWishlist,
  } = useWishlist();

  const isInWishlist = isAlreadyInWishlist(wishlist, itemInfo);

  return (
    <div className='card'>
      <CardLoader showLoader={showCardLoader} />
      <span
        onClick={() =>
          isInWishlist
            ? handleRemoveFromWishlist({
                itemID: _id,
                encodedToken,
                dispatchWishlist,
                setShowCardLoader,
              })
            : handleAddToWishlist({
                product: itemInfo,
                encodedToken,
                dispatchWishlist,
                setShowCardLoader,
                navigate,
              })
        }
        className={`material-icons-outlined card-icon-like ${
          isInWishlist ? 'active' : 'inactive'
        }`}
      >
        favorite
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
                setShowCardLoader,
                navigate,
              })
            }
            className='btn btn-secondary card-btn'
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
