import { v4 as uuid } from 'uuid';
import { categories, FILTER_ACTIONS } from '../../../utils';
import { useProducts } from '../../../contexts';

export const CategoryFilter = () => {
  const { state, dispatch } = useProducts();

  const handleChange = (e) =>
    dispatch({
      type: FILTER_ACTIONS.TOGGLE_CATEGORIES,
      payload: { category: e.target.value },
    });

  return (
    <div className='filter-section'>
      <h2 className='text-base'>Category</h2>
      {categories.map(({ id, category }) => {
        const _id = uuid();
        return (
          <label key={id} htmlFor={_id}>
            <input
              onChange={handleChange}
              type='checkbox'
              name={'filter-by-category' + _id}
              value={category}
              id={_id}
              checked={state.categories.includes(category)}
            />
            {category}
          </label>
        );
      })}
    </div>
  );
};
