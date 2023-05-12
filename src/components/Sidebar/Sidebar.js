import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../utils/Context";

const Sidebar = () => {
  const {
    active,
    setActive,
    filterData,
    myTaskText,
    currentTask,
    setSelectedUser,
  } = useContext(CustomContext);

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {filterData?.map((item) => {
          return (
            <li
              onClick={() => {
                setActive(item.id);
                setSelectedUser(item);
              }}
              key={item?.id}
              className={`sidebar__list-item ${active === item.id && "active"}`}
            >
              <h3 className="sidebar__list-title">
                {item?.taskText.length > 20
                  ? item?.taskText.slice(0, 20) + "..."
                  : item?.taskText}
              </h3>
              <span className="sidebar__list-date">{item?.taskEditTime}</span>
              <p className="sidebar__list-text">
                {item?.taskText.slice(0, 30)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
