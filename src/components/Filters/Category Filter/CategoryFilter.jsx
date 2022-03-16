import { categories } from '../../../utils';

export const CategoryFilter = () => {
  return (
    <div className='filter-section'>
      <h2 className='text-base'>Category</h2>
      {categories.map(({ id, category }) => {
        return (
          <label key={id} htmlFor={category}>
            <input type='checkbox' name='filter-by-category' id={category} />
            {category}
          </label>
        );
      })}
    </div>
  );
};
