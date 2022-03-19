import { sliceProductName } from '../../utils';
import './CartItemCard.css';

export const CartItemCard = ({ product }) => {
  const { name, price, qty, img } = product;
  return (
    <div className='card'>
      <div className='card-header m-xs-tb'>
        <img className='card-img m-xs-tb' src={img} alt={name} />
      </div>
      <div className='card-body m-xs-tb'>
        <h2 className='item-price m-xs-tb'>$ {price} USD</h2>
        <h3 className='card-title m-xs-tb'>
          {name.length >= 30 ? sliceProductName(name) : name}
        </h3>
      </div>
      <div className='card-footer m-xs-tb'>
        <div className='product-qty-controls'>
          <button className='btn btn-primary' disabled={true}>
            <span className='material-icons-outlined'> remove </span>
          </button>
          <div className='qty'>{qty}</div>
          <button className='btn btn-primary'>
            <span className='material-icons-outlined'> add </span>
          </button>
        </div>
        <button className='btn btn-secondary card-btn m-sm-t'>
          Move to wishlist
        </button>
        <button className='btn btn-secondary outlined card-btn m-sm-t'>
          Remove from cart
        </button>
      </div>
    </div>
  );
};
