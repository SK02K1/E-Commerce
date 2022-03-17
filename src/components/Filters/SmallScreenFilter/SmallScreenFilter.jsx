import { useState } from 'react';
import { useProducts } from '../../../contexts';
import { FILTER_ACTIONS } from '../../../utils';
import '../Filter.css';
import {
  PriceFilter,
  CategoryFilter,
  RatingFilter,
  SortByPrice,
} from '../index';

export const SmallScreenFilter = () => {
  const [showFilterTray, setShowFilterTray] = useState(false);
  const { dispatch } = useProducts();
  return (
    <div className='filter-mobile'>
      <div
        onClick={() => setShowFilterTray((prevState) => !prevState)}
        className='filter-header'
      >
        <div>
          <span className='material-icons-outlined icon-filter'>
            filter_list
          </span>
          <span>Filter</span>
        </div>
        <span
          className={`material-icons-outlined icon-expand ${
            showFilterTray && 'toggle-expand'
          }`}
        >
          {' '}
          expand_less{' '}
        </span>
      </div>

      <div className={`filter-body ${showFilterTray && 'reveal-filter-tray'}`}>
        <div className='filter-controls m-xs-b'>
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
      </div>
    </div>
  );
};
