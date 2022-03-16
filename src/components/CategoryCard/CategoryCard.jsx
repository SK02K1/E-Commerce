import { Link } from 'react-router-dom';
import './CategoryCard.css';

export const CategoryCard = ({ data: { categoryName, imgURL } }) => {
  return (
    <Link to='/products' className='category-card'>
      <div className='overlay'>
        <h2>{categoryName}</h2>
      </div>
      <img src={imgURL} alt={categoryName} />
    </Link>
  );
};
