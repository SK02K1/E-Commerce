import { Link } from 'react-router-dom';
import HeroStyles from './Hero.module.css';

export const Hero = () => {
  return (
    <header className={HeroStyles.heroSection}>
      <div className={HeroStyles.overlay}>
        <h1 className={HeroStyles.heroTitle}>Focus Store</h1>
        <p className={HeroStyles.heroDescription}>
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
