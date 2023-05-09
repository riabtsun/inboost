import React from 'react';
import SearchIcon from "../../assets/icons/SearchIcon";

const SearchBox = () => {
  return (
    <div className='searchBox'>
      <input type="search" className='searchBox__input'/>
      <SearchIcon className='searchBox__icon'/>
    </div>
  );
};

export default SearchBox;