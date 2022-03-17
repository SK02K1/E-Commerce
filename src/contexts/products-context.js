import { createContext, useContext, useReducer } from 'react';
import { productsReducer } from '../reducers/index';

const ProductsContext = createContext(null);

const initialState = {
  sortByPrice: null,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
