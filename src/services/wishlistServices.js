import axios from 'axios';
import { WISHLIST_ACTIONS } from '../utils';
import { handleAddToCart } from './cartServices';

export const handleAddToWishlist = async ({
  product,
  encodedToken,
  dispatchWishlist,
  setShowCardLoader,
  navigate,
}) => {
  if (encodedToken) {
    setShowCardLoader(true);
    try {
      const {
        data: { wishlist },
        status,
      } = await axios.post(
        '/api/user/wishlist',
        { product },
        { headers: { authorization: encodedToken } }
      );
      setShowCardLoader(false);
      if (status === 201) {
        dispatchWishlist({
          type: WISHLIST_ACTIONS.UPDATE_WISHLIST,
          payload: { updatedWishlist: wishlist },
        });
      }
    } catch (error) {
      console.error(error.response);
    }
  } else {
    navigate('/login');
  }
};

export const handleRemoveFromWishlist = async ({
  itemID,
  encodedToken,
  dispatchWishlist,
  setShowCardLoader,
}) => {
  try {
    setShowCardLoader(true);
    const {
      data: { wishlist },
      status,
    } = await axios.delete(`/api/user/wishlist/${itemID}`, {
      headers: { authorization: encodedToken },
    });
    setShowCardLoader(false);
    if (status === 200) {
      dispatchWishlist({
        type: WISHLIST_ACTIONS.UPDATE_WISHLIST,
        payload: { updatedWishlist: wishlist },
      });
    }
  } catch (error) {
    console.error(error.response);
  }
};

export const handleMoveToCart = ({
  product,
  encodedToken,
  dispatchWishlist,
  dispatchCart,
  setShowCardLoader,
}) => {
  handleAddToCart({
    itemInfo: product,
    encodedToken,
    dispatchCart,
    setShowCardLoader,
  });
  handleRemoveFromWishlist({
    itemID: product._id,
    encodedToken,
    dispatchWishlist,
    setShowCardLoader,
  });
};
