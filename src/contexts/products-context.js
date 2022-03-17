import { createContext, useContext, useReducer } from 'react';
import { productsReducer } from '../reducers';

const ProductsContext = createContext(null);

export const initialState = {
  sortByPrice: null,
  rating: null,
  categories: [],
  price: 6000,
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
