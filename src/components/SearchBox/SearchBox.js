import React, {useContext, useState} from 'react';
import SearchIcon from "../../assets/icons/SearchIcon";
import {CustomContext} from "../../utils/Context";

const SearchBox = () => {
  const {searchValue, setSearchValue, filterTask} = useContext(CustomContext)


  return (
    <div className='searchBox'>
      <input onChange={event => {
        setSearchValue(event.target.value);
        filterTask(searchValue)
      }} type="search" className='searchBox__input'/>
      <SearchIcon className='searchBox__icon'/>
    </div>
  );
};

export default SearchBox;