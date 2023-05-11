import React, {useContext, useState} from 'react';
import SearchIcon from "../../assets/icons/SearchIcon";
import {CustomContext} from "../../utils/Context";

const SearchBox = () => {
    const {setSearchValue} = useContext(CustomContext)

    return (
        <div className='searchBox'>
            <input onChange={e => setSearchValue(e.target.value)}
                   type="search" className='searchBox__input'/>
            <SearchIcon className='searchBox__icon'/>
        </div>
    );
};

export default SearchBox;