import axios from 'axios';
import { CART_ACTIONS } from '../utils';
import { handleAddToWishlist } from './wishlistServices';

export const handleAddToCart = async ({
  itemInfo: product,
  encodedToken,
  dispatchCart,
  setShowCardLoader,
  navigate,
}) => {
  if (encodedToken) {
    setShowCardLoader(true);
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
        dispatchCart({
          type: CART_ACTIONS.ADD_TO_CART,
          payload: { updatedCart: cart },
        });
      }
    } catch (error) {
      console.log(`Error in adding product to cart: ${error.message}`);
    } finally {
      setShowCardLoader(false);
    }
  } else {
    navigate('/login');
  }
};

export const handleRemoveFromCart = async ({
  itemID,
  setShowCardLoader,
  encodedToken,
  dispatchCart,
}) => {
  setShowCardLoader(true);
  try {
    const {
      data: { cart },
      status,
    } = await axios.delete(`/api/user/cart/${itemID}`, {
      headers: { authorization: encodedToken },
    });
    setShowCardLoader(false);
    if (status === 200) {
      dispatchCart({
        type: CART_ACTIONS.REMOVE_FROM_CART,
        payload: { updatedCart: cart },
      });
    }
  } catch (error) {
    console.log(`Error in removing item from cart: ${error.message}`);
  }
};

export const handleQuantityChange = async ({
  itemID,
  actionType,
  encodedToken,
  dispatchCart,
  setShowCardLoader,
}) => {
  try {
    setShowCardLoader(true);
    const {
      data: { cart },
      status,
    } = await axios.post(
      `/api/user/cart/${itemID}`,
      {
        action: {
          type: actionType,
        },
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setShowCardLoader(false);
    if (status === 200) {
      dispatchCart({
        type: CART_ACTIONS.ITEM_QUANTITY_CHANGE,
        payload: { updatedQuanityCart: cart },
      });
    }
  } catch (error) {
    console.log(`Error in updating item quantity: ${error.message}`);
  }
};

export const handleMoveToWishlist = ({
  product,
  encodedToken,
  dispatchWishlist,
  dispatchCart,
  setShowCardLoader,
}) => {
  handleAddToWishlist({
    product,
    encodedToken,
    dispatchWishlist,
    setShowCardLoader,
  });
  handleRemoveFromCart({
    itemID: product._id,
    setShowCardLoader,
    encodedToken,
    dispatchCart,
  });
};
