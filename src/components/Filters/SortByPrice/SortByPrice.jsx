import { v4 as uuid } from 'uuid';
import { FILTER_ACTIONS, sortBy } from '../../../utils/index';
import { useProducts } from '../../../contexts/index';

export const SortByPrice = () => {
  const { state, dispatch } = useProducts();

  const handleChange = (e) =>
    dispatch({
      type: FILTER_ACTIONS.SORT_BY_PRICE,
      payload: { sortByPrice: e.target.value },
    });

  return (
    <div className='filter-section'>
      <h2 className='text-base'>Sort by</h2>
      {sortBy.map(({ id, sortBy, value }) => {
        const _id = uuid();
        return (
          <label key={id} htmlFor={_id}>
            <input
              onChange={handleChange}
              type='radio'
              name={'sort-by-price' + _id}
              value={value}
              id={_id}
              checked={state.sortByPrice === value}
            />
            {sortBy}
          </label>
        );
      })}
    </div>
  );
};
