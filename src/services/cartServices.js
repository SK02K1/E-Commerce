import axios from 'axios';
import { CART_ACTIONS } from '../utils';
import { handleAddToWishlist } from './wishlistServices';
import toast from 'react-hot-toast';

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
        toast.success('Product added to your cart');
      }
    } catch (error) {
      toast.error('Failed to add product in the cart');
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
      toast.success('Product removed from cart');
    }
  } catch (error) {
    toast.error('Failed to remove product from the cart');
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
      toast.success('Product quantity updated');
    }
  } catch (error) {
    toast.error('Failed to update product quantity');
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
