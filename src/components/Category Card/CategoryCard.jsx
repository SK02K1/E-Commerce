import { Link } from 'react-router-dom';
import CategoryCardStyles from './CategoryCard.module.css';

export const CategoryCard = ({ data: { categoryName, imgURL } }) => {
  return (
    <Link to='/products' className={CategoryCardStyles.categoryCard}>
      <div className={CategoryCardStyles.overlay}>
        <h2>{categoryName}</h2>
      </div>
      <img src={imgURL} alt={categoryName} />
    </Link>
  );
};
