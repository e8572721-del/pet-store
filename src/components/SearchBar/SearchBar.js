import './SearchBar.scss';
import Icon from './../Icon/Icon';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import data from '../../apiMock.json';
import classNames from 'classnames';

const SearchBar = ({ setSearchValue }) => {
  const searchInput = useRef(null);
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event) => {
    const fuse = new Fuse(data.pets, { keys: ['name', 'species'] });
    const result = fuse.search(event.target.value);
    let finalResult = [];

    if (result.length) {
      result.forEach((item) => finalResult.push(item.item));
      setSuggestions(finalResult);
      setSearchValue(finalResult);
    } else {
      setSuggestions([]);
      setSearchValue([]);
    }
  };

  return (
    <section className="searchBar" role="search">
      <form action="#" method="post">
        <fieldset>
          <label htmlFor="search" className="searchBar__label">
            <Icon name="search" className="searchBar__icon" />
            <input
              className="searchBar__input"
              ref={searchInput}
              onChange={onChange}
              type="search"
              name="search"
              id="search"
              placeholder="Search for pets"
              maxLength="10"
            />
            <ul
              className={classNames('searchBar__suggestions', {
                '-isActive': suggestions.length > 0,
              })}
            >
              {suggestions.length > 0 && suggestions.map((item) => <li>{item.name}</li>)}
            </ul>
          </label>
        </fieldset>
      </form>
    </section>
  );
};

SearchBar.propTypes = {
  setSearchValue: PropTypes.func,
};

export default SearchBar;
