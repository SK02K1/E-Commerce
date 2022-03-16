import '../Filter.css';
import {
  PriceFilter,
  CategoryFilter,
  RatingFilter,
  SortByPrice,
} from '../index';

export const LargeScreenFilter = () => {
  return (
    <aside className='sidebar-filter'>
      <div className='filter-controls m-xs-b'>
        <h2 className='text-base'>Filter</h2>
        <button className='btn btn-secondary'>clear</button>
      </div>
      <PriceFilter />
      <CategoryFilter />
      <RatingFilter />
      <SortByPrice />
    </aside>
  );
};
