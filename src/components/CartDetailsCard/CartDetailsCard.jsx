import './CartDetailsCard.css';
import { getCartDetails } from '../../utils';

export const CartDetailsCard = ({ cartItems }) => {
  const { totalItems, totalPrice, discount, deliveryCharges } =
    getCartDetails(cartItems);

  const totalAmount = totalPrice + deliveryCharges - discount;

  return (
    <div className='cart-detail-card'>
      <h2 className='text-base m-sm-tb'>Price Details</h2>
      <div className='m-sm-tb'>
        <span>
          Price ({totalItems} {totalItems > 1 ? 'items' : 'item'})
        </span>
        <span>$ {totalPrice}</span>
      </div>
      <div className='m-sm-tb'>
        <span>Discount</span>
        <span>${discount} USD</span>
      </div>
      <div className='m-sm-tb'>
        <span>Delivery Charges</span>
        <span>${deliveryCharges} USD</span>
      </div>
      <h2 className='text-base m-sm-tb'>
        <span>Total Amount</span>
        <span>${totalAmount} USD</span>
      </h2>
      <button className='btn btn-primary m-xs-tb' disabled={!totalAmount}>
        PLACE ORDER
      </button>
    </div>
  );
};
