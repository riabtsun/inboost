import React, { useContext } from "react";
import { CustomContext } from "../../utils/Context";

const Workspace = () => {
  const { handleTextChange, selectedUser, editTask } =
    useContext(CustomContext);

  return (
    <div className="workspace">
      <textarea
        onChange={(e) => handleTextChange(e)}
        className="workspace__text"
        name="taskText"
        id="textArea"
        disabled={!editTask}
        value={selectedUser ? selectedUser.taskText : ""}
      ></textarea>
    </div>
  );
};

export default Workspace;
