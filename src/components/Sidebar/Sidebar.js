import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../utils/Context";

const Sidebar = () => {
  const {taskText, taskEditTime, allTodos} = useContext(CustomContext)

  const [active, setActive] = useState()
  const toggleClass = (e) => {
    setActive(e)
  }

  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
        {allTodos?.map((item, idx) => {
          return (
            <li onClick={(e)=>toggleClass(item.id)} key={item?.id}
                className={`sidebar__list-item ${active === item.id && 'active'}`}>
              <h3 className='sidebar__list-title'>{item?.taskText.slice(0, 20)}...</h3>
              <span className='sidebar__list-date'>{item?.taskEditTime}</span>
              <p className='sidebar__list-text'>{item?.taskText.slice(0, 30)}</p>
            </li>)
        })}
      </ul>
    </div>
  );
};

export default Sidebar;