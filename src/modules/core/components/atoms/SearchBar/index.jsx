import React from 'react';
import './styles.scss';
import { RiSearch2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func
};

function SearchBar({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="filter_search">
      <RiSearch2Line className="icon_search" />
      <input
        className="input-search"
        placeholder="SEARCH"
        value={searchValue}
        onChange={onSearchValueChange}
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls="reac-autowhatever-1"
      />
    </div>
  );
}

export default SearchBar;
