import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";

const Workspace = () => {
  const {setTitle} = useContext(CustomContext)
  return (
    <div className='workspace'>
      <textarea onChange={(e)=>setTitle(e.target.value)} className='workspace__text' name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
};

export default Workspace;