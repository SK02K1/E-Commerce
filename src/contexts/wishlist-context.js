import axios from 'axios';
import { createContext, useReducer, useContext, useEffect } from 'react';
import { wishlistReducer } from '../reducers';
import { WISHLIST_ACTIONS } from '../utils';
import { useAuth } from './auth-context';

const WishlistContext = createContext(null);

export const initialState = {
  wishlist: [],
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);
  const { encodedToken } = useAuth();

  useEffect(() => {
    if (encodedToken) {
      (async () => {
        try {
          const {
            data: { wishlist },
            status,
          } = await axios.get('/api/user/wishlist', {
            headers: { authorization: encodedToken },
          });
          if (status === 200) {
            dispatch({
              type: WISHLIST_ACTIONS.INITIALIZE_WISHLIST,
              payload: { wishlist },
            });
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [encodedToken]);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
