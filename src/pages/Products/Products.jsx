import {
  Search,
  Loader,
  ProductCard,
  SmallScreenFilter,
  LargeScreenFilter,
} from '../../components/index';
import { useProducts } from '../../contexts/index';
import { useAxios } from '../../hooks';
import './Products.css';
import {
  getSortedData,
  getFilteredData,
  filterByRating,
} from '../../utils/index';

export const Products = () => {
  const {
    data: { products = [] },
    isLoaderActive,
    error,
  } = useAxios('/api/products');

  const { state } = useProducts();

  const filteredProducts = getFilteredData(getSortedData, filterByRating)(
    products,
    state
  );

  return (
    <>
      <Search />
      <SmallScreenFilter />
      <main className='main-wrapper'>
        <LargeScreenFilter />
        {isLoaderActive ? (
          <Loader />
        ) : (
          <div className='grid-container auto main-content'>
            {filteredProducts.map((itemInfo) => (
              <ProductCard key={itemInfo.id} itemInfo={itemInfo} />
            ))}
          </div>
        )}
      </main>
      {error && <p className='text-center'>{error.message}</p>}
    </>
  );
};
