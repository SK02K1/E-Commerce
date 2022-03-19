import axios from 'axios';
import { CART_ACTIONS } from '../utils';

export const handleAddToCart = async ({
  itemInfo: product,
  encodedToken,
  dispatch,
  setIsAdding,
  navigate,
}) => {
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

export const handleRemoveFromCart = async ({
  itemID,
  setIsRemoving,
  encodedToken,
  dispatch,
}) => {
  setIsRemoving(true);
  try {
    const {
      data: { cart },
      status,
    } = await axios.delete(`/api/user/cart/${itemID}`, {
      headers: { authorization: encodedToken },
    });
    setIsRemoving(false);
    if (status === 200) {
      dispatch({
        type: CART_ACTIONS.REMOVE_FROM_CART,
        payload: { updatedCart: cart },
      });
    }
  } catch (error) {
    console.log(`Error in removing item from cart: ${error.message}`);
  }
};
