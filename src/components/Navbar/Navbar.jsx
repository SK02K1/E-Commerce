import NavbarStyles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={`navbar ${NavbarStyles.navbar}`}>
      <div className={NavbarStyles.logo}>
        <a href='/'>FS.</a>
      </div>

      <ul className='links'>
        <li>
          <a className='nav-link' href='/'>
            <div className='icon-badge'>
              <span className={`material-icons-outlined ${NavbarStyles.icon}`}>
                shopping_cart
              </span>
              <div>0</div>
            </div>
          </a>
        </li>
        <li>
          <a className='nav-link' href='/'>
            <div className='icon-badge'>
              <span className={`material-icons-outlined ${NavbarStyles.icon}`}>
                favorite_border
              </span>
              <div>0</div>
            </div>
          </a>
        </li>
        <li>
          <a className='nav-link' href='/'>
            <div className='icon-badge'>
              <span className={`material-icons-outlined ${NavbarStyles.icon}`}>
                person
              </span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
