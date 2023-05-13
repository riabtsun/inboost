import React, { useContext } from "react";
import { CustomContext } from "../../utils/Context";

const ListItem = () => {
  const {
    active,
    setActive,
    filterData,
    setSelectedUser,
    selectedUser,
    taskText,
    setEditTask,
  } = useContext(CustomContext);

  return (
    <>
      {filterData?.map((item) => {
        return (
          <li
            onClick={() => {
              setActive(item.id);
              setSelectedUser(item);
              setEditTask(false);
            }}
            key={item?.id}
            className={`sidebar__list-item ${active === item.id && "active"}`}
          >
            <h3 className="sidebar__list-title">
              {item?.id === selectedUser?.id && taskText.length > 20
                ? selectedUser.taskText.slice(0, 20) + "..."
                : item.taskText.slice(0, 20) + "..."}
            </h3>
            <span className="sidebar__list-date">{item?.taskEditTime}</span>
            <p className="sidebar__list-text">
              {item?.id === selectedUser?.id && taskText.length > 25
                ? selectedUser.taskText.slice(0, 25) + "..."
                : item.taskText.slice(0, 25) + "..."}
            </p>
          </li>
        );
      })}
    </>
  );
};

export default ListItem;
