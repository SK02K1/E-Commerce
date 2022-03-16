import { Link } from 'react-router-dom';
import './Hero.css';
export const Hero = () => {
  return (
    <header className='hero-section'>
      <div className='overlay'>
        <h1 className='hero-title'>Focus Store</h1>
        <p className='hero-description'>
          Marketplace for filmmakers and photographers
        </p>
        <Link className='btn btn-primary m-xs-t' to='/products'>
          SHOP NOW
        </Link>
      </div>
      <img
        src='https://focus-store-sk02k1.netlify.app/assets/hero%20section/hero-banner.jpeg'
        alt='hero banner'
      />
    </header>
  );
};
