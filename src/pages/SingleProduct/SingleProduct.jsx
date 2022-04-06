import './SingleProduct.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../hooks';
import { Loader } from '../../components';

export const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { productID } = useParams();
  const { data, isLoaderActive } = useAxios(`/api/products/${productID}`);

  useEffect(() => {
    if (data?.product) {
      setProduct(data.product);
    }
  }, [data]);

  const { name, price, img, rating, description } = product;

  return (
    <div className='main-content'>
      {isLoaderActive ? (
        <Loader />
      ) : (
        <div className='single-product-card m-auto-lr'>
          <img className='m-xs-b' src={img} alt={name} />
          <div className='product-details'>
            <h1 className='text-xl m-xs-b'>{name}</h1>
            <h2 className='text-base m-xs-b'>$ {price} USD</h2>
            <div className='text-sm m-xs-b'>rating: {rating}/5</div>
            <p className='m-sm-tb'>{description}</p>
          </div>
          <div className='product-controls'>
            <button className='btn btn-primary'>add to cart</button>
            <button className='btn btn-secondary'>add to wishlist</button>
          </div>
        </div>
      )}
    </div>
  );
};
