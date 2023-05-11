import React, {useContext} from 'react';
import SearchBox from "../../components/SearchBox/SearchBox";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import PLusIcon from "../../assets/icons/PLusIcon";
import {CustomContext} from "../../utils/Context";

const Header = () => {
  const {active, addTask, deleteTask} = useContext(CustomContext)
  return (
    <header className='header'>
      <div className="header__content">
        <div className="header__buttons">
          <PLusIcon className='plusIcon' onClick={addTask} />
          <DeleteIcon className='deleteIcon' onClick={()=>deleteTask(active)}/>
          <EditIcon className='editIcon'/>
        </div>
        <SearchBox/>
      </div>
    </header>
  );
};

export default Header;