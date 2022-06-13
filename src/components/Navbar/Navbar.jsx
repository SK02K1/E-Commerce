import { Link } from 'react-router-dom';
import { useAuth, useCart, useWishlist } from '../../contexts';
import './Navbar.css';

export const Navbar = () => {
  const {
    userData: { encodedToken },
  } = useAuth();
  const {
    cartState: { cartItems },
  } = useCart();
  const {
    wishlistState: { wishlist },
  } = useWishlist();
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to='/'>FS.</Link>
      </div>
      <ul className='links'>
        <li>
          <Link to='/products' className='nav-link'>
            <div className='icon-badge'>
              <span className='material-icons-outlined icon'>store</span>
            </div>
          </Link>
          <p className='text-xs text-center'>Store</p>
        </li>
        <li>
          <Link to='/cart' className='nav-link'>
            <div className='icon-badge'>
              <span className='material-icons-outlined icon'>
                shopping_cart
              </span>
              <div>{cartItems.length}</div>
            </div>
          </Link>
          <p className='text-xs text-center'>Cart</p>
        </li>
        <li>
          <Link to='/wishlist' className='nav-link'>
            <div className='icon-badge'>
              <span className='material-icons-outlined icon'>
                favorite_border
              </span>
              <div>{wishlist.length}</div>
            </div>
          </Link>
          <p className='text-xs text-center'>wishlist</p>
        </li>
        <li>
          {encodedToken ? (
            <Link to='/profile' className='nav-link'>
              <div className='icon-badge'>
                <span className='material-icons-outlined icon'>person</span>
              </div>
            </Link>
          ) : (
            <Link to='/login' className='nav-link'>
              <div className='icon-badge'>
                <span className='material-icons-outlined icon'>login</span>
              </div>
            </Link>
          )}
          <p className='text-xs text-center'>
            {encodedToken ? 'Profile' : 'Login'}
          </p>
        </li>
      </ul>
    </nav>
  );
};
