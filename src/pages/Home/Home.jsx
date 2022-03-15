import ClipLoader from 'react-spinners/ClipLoader';
import { Search, Hero, CategoryCard } from '../../components/index';
import { useAxios } from '../../hooks/useAxios';

export const Home = () => {
  const {
    data: categories,
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
          <ClipLoader
            color='#6b7280'
            loading={isLoaderActive}
            size={15}
            speedMultiplier={2}
          />
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
