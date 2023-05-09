import React from 'react';
import SearchBox from "../../components/SearchBox/SearchBox";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import PLusIcon from "../../assets/icons/PLusIcon";

const Header = () => {
  return (
    <header className='header'>
      <div className="header__content">
        <div className="header__buttons">
          <PLusIcon className='plusIcon'/>
          <DeleteIcon className='deleteIcon'/>
          <EditIcon className='editIcon'/>
        </div>
        <SearchBox/>
      </div>
    </header>
  );
};

export default Header;