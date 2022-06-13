import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts';
import { FILTER_ACTIONS } from '../../utils';
import './CategoryCard.css';

const categoryDictionary = {
  Drones: 'drone',
  Gimbals: 'gimbal',
  Cameras: 'camera',
  Lenses: 'lens',
};

export const CategoryCard = ({ data: { categoryName, imgURL } }) => {
  const navigate = useNavigate();
  const { dispatch } = useProducts();

  const categoryCardHandler = () => {
    dispatch({
      type: FILTER_ACTIONS.CLEAR_FILTERS,
    });
    dispatch({
      type: FILTER_ACTIONS.TOGGLE_CATEGORIES,
      payload: { category: categoryDictionary[categoryName] },
    });
    navigate(`/products`);
  };

  return (
    <div onClick={categoryCardHandler} className='category-card'>
      <div className='overlay'>
        <h2>{categoryName}</h2>
      </div>
      <img src={imgURL} alt={categoryName} />
    </div>
  );
};
