import axios from 'axios';
import { WISHLIST_ACTIONS } from '../utils';

export const handleAddToWishlist = async ({
  product,
  encodedToken,
  dispatchWishlist,
  navigate,
}) => {
  if (encodedToken) {
    try {
      const {
        data: { wishlist },
        status,
      } = await axios.post(
        '/api/user/wishlist',
        { product },
        { headers: { authorization: encodedToken } }
      );
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
