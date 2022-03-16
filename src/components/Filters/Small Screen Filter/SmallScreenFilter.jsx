import { useState } from 'react';
import '../Filter.css';
import {
  PriceFilter,
  CategoryFilter,
  RatingFilter,
  SortByPrice,
} from '../index';

export const SmallScreenFilter = () => {
  const [showFilterTray, setShowFilterTray] = useState(false);
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
          <button className='btn btn-secondary'>clear</button>
        </div>
        <PriceFilter />
        <CategoryFilter />
        <RatingFilter />
        <SortByPrice />
      </div>
    </div>
  );
};
