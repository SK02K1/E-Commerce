import { isAlreadyInCart, sliceProductName } from '../../utils';
import { handleRemoveFromWishlist, handleMoveToCart } from '../../services/';
import { useAuth, useCart, useWishlist } from '../../contexts';
import { CardLoader } from '../Loader/CardLoader';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const WishlistItemCard = ({ product }) => {
  const { _id, name, price, img } = product;
  const { dispatchWishlist } = useWishlist();
  const {
    userData: { encodedToken },
  } = useAuth();
  const [showCardLoader, setShowCardLoader] = useState(false);
  const {
    cartState: { cartItems },
    dispatchCart,
  } = useCart();
  const isInCart = isAlreadyInCart(cartItems, product);
  return (
    <div className='card'>
      <CardLoader showLoader={showCardLoader} />
      <span
        onClick={() =>
          handleRemoveFromWishlist({
            itemID: _id,
            dispatchWishlist,
            encodedToken,
            setShowCardLoader,
          })
        }
        className='material-icons-outlined card-icon-like active'
      >
        favorite
      </span>
      <div className='card-header m-xs-tb'>
        <img className='card-img m-xs-tb' src={img} alt={name} />
      </div>
      <div className='card-body m-xs-tb'>
        <h2 className='item-price m-xs-tb'>${price} USD</h2>
        <h3 className='card-title m-xs-tb'>
          {name.length >= 30 ? sliceProductName(name) : name}
        </h3>
      </div>
      <div className='card-footer m-sm-tb'>
        {isInCart ? (
          <Link to='/cart' className='btn btn-success card-btn'>
            checkout
          </Link>
        ) : (
          <button
            onClick={() =>
              handleMoveToCart({
                product,
                encodedToken,
                dispatchCart,
                dispatchWishlist,
                setShowCardLoader,
              })
            }
            className='btn btn-primary card-btn'
          >
            Move to cart
          </button>
        )}
      </div>
    </div>
  );
};
