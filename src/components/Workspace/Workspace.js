import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";


const Workspace = () => {
  const {setTaskText, currentTask} = useContext(CustomContext)

  return (
    <div className='workspace'>
      <textarea
        onChange={(e) => setTaskText( e.target.value )}
                className='workspace__text' name="taskText"
                id="textArea"
                value={currentTask}
      ></textarea>
    </div>
  );
};

export default Workspace;