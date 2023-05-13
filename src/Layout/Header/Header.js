import React, { useContext } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import PLusIcon from "../../assets/icons/PLusIcon";
import { CustomContext } from "../../utils/Context";

const Header = () => {
  const {
    active,
    addTask,
    deleteTask,
    setEditTask,
    setAddNewTask,
    disableButtons,
  } = useContext(CustomContext);
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__buttons">
          <button
            className="header__button"
            onClick={() => {
              setEditTask(false);
              setAddNewTask(true);
              addTask();
            }}
          >
            <PLusIcon className="plusIcon" />
          </button>
          <button
            disabled={!!disableButtons}
            className="header__button"
            onClick={() => {
              deleteTask(active);
            }}
          >
            <DeleteIcon className="deleteIcon" />
          </button>
          <button
            disabled={!!disableButtons}
            className="header__button"
            onClick={() => {
              setEditTask(true);
              setAddNewTask(false);
            }}
          >
            <EditIcon className="editIcon" />
          </button>
        </div>
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
