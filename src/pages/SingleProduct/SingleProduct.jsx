import './SingleProduct.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAxios, useDocumentTitle } from '../../hooks';
import { Loader } from '../../components';
import { useAuth, useCart, useWishlist } from '../../contexts';
import { isAlreadyInCart, isAlreadyInWishlist } from '../../utils';
import {
  handleAddToCart,
  handleAddToWishlist,
  handleRemoveFromWishlist,
} from '../../services';

export const SingleProduct = () => {
  const { setDocumentTitle } = useDocumentTitle('Products');
  const [product, setProduct] = useState({});
  const [showCardLoader, setShowCardLoader] = useState(false);
  const { productID } = useParams();
  const navigate = useNavigate();
  const { data, isLoaderActive } = useAxios(`/api/products/${productID}`);
  const {
    userData: { encodedToken },
  } = useAuth();
  const {
    cartState: { cartItems },
    dispatchCart,
  } = useCart();
  const {
    wishlistState: { wishlist },
    dispatchWishlist,
  } = useWishlist();

  useEffect(() => {
    if (data?.product) {
      setProduct(data.product);
      setDocumentTitle(data.product.name);
    }
  }, [data, setDocumentTitle]);

  const { _id, name, price, img, rating, description } = product;
  const isInCart = isAlreadyInCart(cartItems, product);
  const isInWishlist = isAlreadyInWishlist(wishlist, product);

  const cartBtnHandler = () => {
    handleAddToCart({
      itemInfo: product,
      encodedToken,
      dispatchCart,
      setShowCardLoader,
      navigate,
    });
  };

  const wishlistBtnHandler = () => {
    isInWishlist
      ? handleRemoveFromWishlist({
          itemID: _id,
          encodedToken,
          dispatchWishlist,
          setShowCardLoader,
        })
      : handleAddToWishlist({
          product,
          encodedToken,
          dispatchWishlist,
          setShowCardLoader,
          navigate,
        });
  };

  return (
    <div className='main-content'>
      {isLoaderActive ? (
        <Loader />
      ) : (
        <div className='single-product-card m-auto-lr'>
          <img className='m-xs-b' src={img} alt={name} />
          <div className='product-details'>
            <h1 className='text-xl m-xs-b'>{name}</h1>
            <h2 className='text-base m-xs-b'>$ {price} USD</h2>
            <div className='text-sm m-xs-b'>rating: {rating}/5</div>
            <p className='m-sm-tb'>{description}</p>
          </div>
          <div className='product-controls'>
            {isInCart ? (
              <Link className='btn btn-primary' to='/cart'>
                Go to cart
              </Link>
            ) : (
              <button
                onClick={cartBtnHandler}
                className='btn btn-primary'
                disabled={showCardLoader}
              >
                Add to cart
              </button>
            )}
            <button
              onClick={wishlistBtnHandler}
              className='btn btn-secondary'
              disabled={showCardLoader}
            >
              {isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
