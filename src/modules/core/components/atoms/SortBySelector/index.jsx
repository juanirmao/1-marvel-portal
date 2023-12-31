import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

SortBySelector.propTypes = {
  selectValue: PropTypes.string,
  setSelectValue: PropTypes.func
};

function SortBySelector({ selectValue, setSelectValue }) {
  const onSelectValueChange = (event) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
  };

  return (
    <>
      <div>
        <h3>Sort By</h3>
        <span>{selectValue}</span>
      </div>
      <div>
        <select value={selectValue} onChange={onSelectValueChange}>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
      </div>
    </>
  );
}

export default SortBySelector;
