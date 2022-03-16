import { sliceProductName } from '../../utils/index';

export const ProductCard = ({ itemInfo: { name, price, img, rating } }) => {
  return (
    <div className='card'>
      <span className='material-icons-outlined card-icon-like'>
        favorite_border
      </span>
      <div className='card-header m-xs-tb'>
        <img className='card-img m-xs-tb' src={img} alt={name} />
      </div>
      <div className='card-body m-xs-tb'>
        <h2 className='item-price m-xs-tb'>$ {price} USD</h2>
        <h3 className='card-title m-xs-tb'>
          {name.length >= 30 ? sliceProductName(name) : name}
        </h3>
        <h4 className='text-sm'>{rating}/5</h4>
      </div>
      <div className='card-footer m-sm-tb'>
        <button className='btn btn-primary card-btn' href='#'>
          Add to cart
        </button>
      </div>
    </div>
  );
};
