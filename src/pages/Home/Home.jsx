import axios from 'axios';
import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Search, Hero, CategoryCard } from '../../components/index';

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get('/api/categories');
        if (status === 200) {
          setCategories(data.categories);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoaderActive(false);
      }
    })();
  }, []);
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
