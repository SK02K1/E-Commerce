import { ratings } from '../../../utils';

export const RatingFilter = () => {
  return (
    <div className='filter-section'>
      <h2 className='text-base'>Rating</h2>
      {ratings.map((rating) => {
        return (
          <label key={rating} htmlFor={rating}>
            <input type='radio' name='rating' id={rating} />
            {rating} {rating === 1 ? 'star' : 'stars'} & above
          </label>
        );
      })}
    </div>
  );
};
