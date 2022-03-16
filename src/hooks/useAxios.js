import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(url);
        if (status === 200) {
          setData(data.categories);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoaderActive(false);
      }
    })();
  }, [url]);

  return { data, isLoaderActive, error };
};
