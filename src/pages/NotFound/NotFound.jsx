import './NotFound.css';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks';

export const NotFound = () => {
  useDocumentTitle('Not found');
  return (
    <div className='main-content not-found'>
      <h1 className='text-center m-xs-tb'>Oops! 404 Error</h1>
      <p className='text-center m-sm-tb'>
        Sorry, we can't seem to find what you are looking for.
      </p>
      <Link to='/' class='btn btn-primary m-xs-tb'>
        <span className='material-icons-outlined m-sm-r'>arrow_back</span>
        Back to home
      </Link>
    </div>
  );
};
