import { sortBy } from '../../../utils';

export const SortByPrice = () => {
  return (
    <div className='filter-section'>
      <h2 className='text-base'>Sort by</h2>
      {sortBy.map((sortBy) => {
        return (
          <label key={sortBy} htmlFor={sortBy}>
            <input type='radio' name='sort-by-price' id={sortBy} />
            {sortBy}
          </label>
        );
      })}
    </div>
  );
};
