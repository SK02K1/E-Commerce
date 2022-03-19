import axios from 'axios';
import { CART_ACTIONS } from '../utils';

export const handleAddToCart = async (
  product,
  encodedToken,
  dispatch,
  setIsAdding,
  navigate
) => {
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
