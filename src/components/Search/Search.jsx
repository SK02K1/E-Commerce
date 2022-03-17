import './Search.css';

export const Search = () => {
  return (
    <div className='search-bar'>
      <label htmlFor='search'>
        <span className='material-icons-round search-bar-icon'>search</span>
      </label>
      <input
        id='search'
        type='text'
        autoComplete='off'
        placeholder='Search products and more'
      />
    </div>
  );
};
