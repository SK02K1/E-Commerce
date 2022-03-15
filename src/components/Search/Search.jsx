import SearchStyles from './Search.module.css';

export const Search = () => {
  return (
    <div className={SearchStyles.searchBar}>
      <label for='search'>
        <span class={`material-icons-round ${SearchStyles.searchBarIcon}`}>
          search
        </span>
      </label>
      <input
        id='search'
        type='text'
        autocomplete='off'
        placeholder='Search products and more'
      />
    </div>
  );
};
