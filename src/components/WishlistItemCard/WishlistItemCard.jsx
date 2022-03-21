import { isAlreadyInCart, sliceProductName } from '../../utils';
import { handleRemoveFromWishlist } from '../../services/';
import { useAuth, useCart, useWishlist } from '../../contexts';
import { Link } from 'react-router-dom';

export const WishlistItemCard = ({ product }) => {
  const { _id, name, price, img } = product;
  const { dispatchWishlist } = useWishlist();
  const { encodedToken } = useAuth();
  const {
    cartState: { cartItems },
  } = useCart();
  const isInCart = isAlreadyInCart(cartItems, product);
  return (
    <div className='card'>
      <span
        onClick={() =>
          handleRemoveFromWishlist({
            itemID: _id,
            dispatchWishlist,
            encodedToken,
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
      <div className='card-footer m-xs-tb'>
        {isInCart ? (
          <Link to='/cart' className='btn btn-success card-btn'>
            checkout
          </Link>
        ) : (
          <button className='btn btn-primary card-btn'>Move to cart</button>
        )}
      </div>
    </div>
  );
};
