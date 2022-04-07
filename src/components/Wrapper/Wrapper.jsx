import './Wrapper.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Wrapper = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <div className='wrapper'>{children}</div>;
};
