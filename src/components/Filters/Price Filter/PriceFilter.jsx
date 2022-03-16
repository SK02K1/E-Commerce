export const PriceFilter = () => {
  return (
    <div className='filter-section'>
      <h2 className='text-base'>Price</h2>
      <div className='slider-range m-xs-t'>
        <span>50</span>
        <span>2000</span>
        <span>6000</span>
      </div>
      <input className='slider' type='range' min='100' max='1000' />
    </div>
  );
};
