import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";

const Workspace = () => {
  const {setTaskText} = useContext(CustomContext)
  return (
    <div className='workspace'>
      <textarea onChange={(e)=>setTaskText(e.target.value)} className='workspace__text' name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default Workspace;