import { createContext, useReducer, useEffect, useContext } from 'react';
import { cartReducer } from '../reducers';
import { useAuth } from '../contexts/';
import axios from 'axios';
import { CART_ACTIONS } from '../utils';

const CartContext = createContext(null);

const initialCartState = {
  cartItems: [],
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);
  const {
    userData: { encodedToken },
  } = useAuth();

  useEffect(() => {
    if (encodedToken) {
      (async () => {
        try {
          const {
            data: { cart },
            statusText,
          } = await axios.get('/api/user/cart', {
            headers: {
              authorization: encodedToken,
            },
          });
          if (statusText === 'OK') {
            dispatchCart({
              type: CART_ACTIONS.INITIALIZE_CART,
              payload: { cart },
            });
          }
        } catch (error) {
          console.log(error.response);
        }
      })();
    } else {
      dispatchCart({
        type: CART_ACTIONS.INITIALIZE_CART,
        payload: { cart: [] },
      });
    }
  }, [encodedToken]);

  return (
    <CartContext.Provider value={{ cartState, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
