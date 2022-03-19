import { createContext, useReducer, useEffect, useContext } from 'react';
import { cartReducer } from '../reducers';
import { useAuth } from '../contexts/';
import axios from 'axios';
import { CART_ACTIONS } from '../utils';

const CartContext = createContext(null);
const initialState = {
  cartItems: [],
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { encodedToken } = useAuth();

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
            dispatch({ type: CART_ACTIONS.INITIALIZE_CART, payload: { cart } });
          }
        } catch (error) {
          console.log(error.response);
        }
      })();
    }
  }, [encodedToken]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
