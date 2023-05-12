import React, { useContext } from "react";
import { CustomContext } from "../../utils/Context";

const Workspace = () => {
  const {
    setTaskText,
    currentTask,
    filterData,
    editTask,
    setEditTask,
    taskText,
  } = useContext(CustomContext);

  return (
    <div className="workspace">
      <textarea
        onChange={(e) => {
          setTaskText(e.target.value);
        }}
        className="workspace__text"
        name="taskText"
        id="textArea"
        disabled={!filterData.length}
        value={currentTask?.taskText}
      ></textarea>
    </div>
  );
};

export default Workspace;
