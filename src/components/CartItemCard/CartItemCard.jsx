import { useState } from 'react';
import { isAlreadyInWishlist, sliceProductName } from '../../utils';
import { useAuth, useCart, useWishlist } from '../../contexts';
import './CartItemCard.css';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import {
  handleRemoveFromCart,
  handleQuantityChange,
  handleMoveToWishlist,
} from '../../services';
import { CardLoader } from '..//Loader/CardLoader';

export const CartItemCard = ({ product }) => {
  const [showCardLoader, setShowCardLoader] = useState(false);
  const { encodedToken } = useAuth();
  const { dispatchCart } = useCart();
  const {
    wishlistState: { wishlist },
    dispatchWishlist,
  } = useWishlist();
  const { _id, name, price, qty, img } = product;
  const isInWishlist = isAlreadyInWishlist(wishlist, product);

  return (
    <div className='card'>
      <CardLoader showLoader={showCardLoader} />
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
          <button
            onClick={() =>
              handleQuantityChange({
                itemID: _id,
                actionType: 'decrement',
                encodedToken,
                dispatchCart,
                setShowCardLoader,
              })
            }
            className='btn btn-primary'
            disabled={qty === 1}
          >
            <span className='material-icons-outlined'> remove </span>
          </button>
          <div className='qty'>{qty}</div>
          <button
            onClick={() =>
              handleQuantityChange({
                itemID: _id,
                actionType: 'increment',
                encodedToken,
                dispatchCart,
                setShowCardLoader,
              })
            }
            className='btn btn-primary'
          >
            <span className='material-icons-outlined'> add </span>
          </button>
        </div>
        {isInWishlist ? (
          <Link to='/wishlist' className='btn btn-secondary card-btn m-sm-t'>
            Go to wishlist
          </Link>
        ) : (
          <button
            onClick={() =>
              handleMoveToWishlist({
                product,
                encodedToken,
                dispatchWishlist,
                dispatchCart,
                setShowCardLoader,
              })
            }
            className='btn btn-secondary card-btn m-sm-t'
          >
            Move to wishlist
          </button>
        )}
        <button
          onClick={() =>
            handleRemoveFromCart({
              itemID: _id,
              setShowCardLoader,
              encodedToken,
              dispatchCart,
            })
          }
          className='btn btn-secondary outlined card-btn m-sm-t'
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};
