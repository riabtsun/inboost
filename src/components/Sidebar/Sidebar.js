import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";

const Sidebar = () => {
  const {title, setTitle} = useContext(CustomContext)
  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
        <li className='sidebar__list-item'>
          <h3 className='sidebar__list-title'></h3>
          <span className='sidebar__list-date'></span>
          <p className='sidebar__list-text'>{title.length<20 ? title : title.slice(0,20) + '...'}</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;