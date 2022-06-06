import {
  Search,
  Loader,
  ProductCard,
  SmallScreenFilter,
  LargeScreenFilter,
} from '../../components';
import { useProducts } from '../../contexts';
import { useAxios, useDocumentTitle } from '../../hooks';
import './Products.css';
import {
  getSortedData,
  getFilteredData,
  filterByRating,
  filterByCategory,
  filterByPrice,
} from '../../utils';

export const Products = () => {
  useDocumentTitle('Products');
  const {
    data: { products = [] },
    isLoaderActive,
    error,
  } = useAxios('/api/products');

  const { state } = useProducts();

  const filteredProducts = getFilteredData(
    getSortedData,
    filterByRating,
    filterByCategory,
    filterByPrice
  )(products, state);

  const foundProductsCount = filteredProducts.length;

  return (
    <>
      <Search />
      <SmallScreenFilter />
      <main className='main-wrapper'>
        <LargeScreenFilter />
        <div className='main-content'>
          {isLoaderActive ? (
            <Loader />
          ) : (
            <>
              <div className='grid-container auto m-xs-b'>
                <h2 className='text-lg'>
                  {foundProductsCount
                    ? `Showing ${foundProductsCount} ${
                        foundProductsCount > 1 ? 'products' : 'product'
                      }`
                    : `No product found`}
                </h2>
              </div>
              <div className='grid-container auto'>
                {filteredProducts.map((itemInfo) => (
                  <ProductCard key={itemInfo.id} itemInfo={itemInfo} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      {error && <p className='text-center'>{error.message}</p>}
    </>
  );
};
