import { useProducts } from '../../../contexts/index';
import { FILTER_ACTIONS } from '../../../utils/index';

export const PriceFilter = () => {
  const { state, dispatch } = useProducts();

  const handleChange = (e) =>
    dispatch({
      type: FILTER_ACTIONS.UPDATE_PRICE_RANGE,
      payload: { price: Number(e.target.value) },
    });

  return (
    <div className='filter-section'>
      <h2 className='text-base'>Price</h2>
      <div className='slider-range m-xs-t'>
        <span>50</span>
        <span>2000</span>
        <span>6000</span>
      </div>
      <input
        onChange={handleChange}
        className='slider'
        type='range'
        value={state.price}
        min='50'
        max='6000'
      />
    </div>
  );
};
