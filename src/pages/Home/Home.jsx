import { Search, Hero, CategoryCard, Loader } from '../../components';
import { useAxios, useDocumentTitle } from '../../hooks';

export const Home = () => {
  useDocumentTitle('Home');
  const {
    data: { categories },
    isLoaderActive,
    error,
  } = useAxios('/api/categories');

  return (
    <div>
      <Search />
      <Hero />
      <div>
        <h2 className='text-xl text-center m-xl-tb'>Featured category</h2>
        {error && <p>{error.message}</p>}
        {isLoaderActive ? (
          <Loader />
        ) : (
          <>
            <div className='grid-container auto m-xl-tb'>
              {categories.map((data) => (
                <CategoryCard key={data.id} data={data} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
