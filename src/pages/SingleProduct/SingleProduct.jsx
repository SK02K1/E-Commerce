import { useParams } from 'react-router-dom';

export const SingleProduct = () => {
  const { productID } = useParams();
  return (
    <div className='content'>
      <h1 className='text-center text-xl m-xs-tb'>Single Product Page</h1>
      <p className='text-center m-xs-tb'>{productID}</p>
    </div>
  );
};
