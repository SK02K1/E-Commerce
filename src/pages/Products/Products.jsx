import { Search, Loader, ProductCard } from '../../components/index';
import { useAxios } from '../../hooks';
import ProductsStyles from './Products.module.css';

export const Products = () => {
  const {
    data: { products },
    isLoaderActive,
    error,
  } = useAxios('/api/products');

  return (
    <>
      <Search />
      <main className={ProductsStyles.mainWrapper}>
        {isLoaderActive ? (
          <Loader />
        ) : (
          <div className={`grid-container auto ${ProductsStyles.mainContent}`}>
            {products.map((itemInfo) => (
              <ProductCard key={itemInfo.id} itemInfo={itemInfo} />
            ))}
          </div>
        )}
      </main>
      {error && <p className='text-center'>{error.message}</p>}
    </>
  );
};
