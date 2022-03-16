import SearchStyles from './Search.module.css';

export const Search = () => {
  return (
    <div className={SearchStyles.searchBar}>
      <label htmlFor='search'>
        <span className={`material-icons-round ${SearchStyles.searchBarIcon}`}>
          search
        </span>
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
