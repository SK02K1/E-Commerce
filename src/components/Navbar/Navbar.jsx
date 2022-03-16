import { Link } from 'react-router-dom';
import NavbarStyles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={`navbar ${NavbarStyles.navbar}`}>
      <div className={NavbarStyles.logo}>
        <Link to='/'>FS.</Link>
      </div>

      <ul className='links'>
        <li>
          <Link to='/cart' className='nav-link'>
            <div className='icon-badge'>
              <span className={`material-icons-outlined ${NavbarStyles.icon}`}>
                shopping_cart
              </span>
              <div>0</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/wishlist' className='nav-link'>
            <div className='icon-badge'>
              <span className={`material-icons-outlined ${NavbarStyles.icon}`}>
                favorite_border
              </span>
              <div>0</div>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/profile' className='nav-link'>
            <div className='icon-badge'>
              <span className={`material-icons-outlined ${NavbarStyles.icon}`}>
                person
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
