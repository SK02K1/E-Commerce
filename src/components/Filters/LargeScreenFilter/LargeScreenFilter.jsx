import { useProducts } from '../../../contexts/index';
import { FILTER_ACTIONS } from '../../../utils';
import '../Filter.css';
import {
  PriceFilter,
  CategoryFilter,
  RatingFilter,
  SortByPrice,
} from '../index';

export const LargeScreenFilter = () => {
  const { dispatch } = useProducts();
  return (
    <aside className='sidebar-filter'>
      <div className='filter-controls m-xs-b'>
        <h2 className='text-base'>Filter</h2>
        <button
          onClick={() => dispatch({ type: FILTER_ACTIONS.CLEAR_FILTERS })}
          className='btn btn-secondary'
        >
          clear
        </button>
      </div>
      <PriceFilter />
      <CategoryFilter />
      <RatingFilter />
      <SortByPrice />
    </aside>
  );
};
