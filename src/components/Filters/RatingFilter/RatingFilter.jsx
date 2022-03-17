import { v4 as uuid } from 'uuid';
import { FILTER_ACTIONS, ratings } from '../../../utils';
import { useProducts } from '../../../contexts';

export const RatingFilter = () => {
  const { state, dispatch } = useProducts();

  const handleChange = (e) =>
    dispatch({
      type: FILTER_ACTIONS.TOGGLE_RATING,
      payload: { rating: e.target.value },
    });

  return (
    <div className='filter-section'>
      <h2 className='text-base'>Rating</h2>
      {ratings.map((rating) => {
        const _id = uuid();
        return (
          <label key={rating} htmlFor={_id}>
            <input
              onChange={handleChange}
              type='radio'
              name={rating + _id}
              value={rating}
              id={_id}
              checked={state.rating === String(rating)}
            />
            {rating} {rating === 1 ? 'star' : 'stars'} & above
          </label>
        );
      })}
    </div>
  );
};
