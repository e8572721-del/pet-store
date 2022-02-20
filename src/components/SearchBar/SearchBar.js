import './SearchBar.scss';
import Icon from './../Icon/Icon';

const SearchBar = (props) => {
  return (
    <section className="searchBar" role="search">
      <form action="#" method="post">
        <fieldset>
          <label htmlFor="search" className="searchBar__label">
            <Icon name="search" className="searchBar__icon" />
            <input
              className="searchBar__input"
              type="search"
              name="search"
              id="search"
              placeholder="Search for pets"
              maxLength="25"
            />
          </label>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchBar;
