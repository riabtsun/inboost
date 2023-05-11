import React from 'react';

const DeleteIcon = ({className, onClick}) => {
  return (
    <svg className={className} onClick={onClick} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xml="preserve">

      <g><path d="M867.5,135.8H663.3v-51c0-41.3-33.4-74.8-74.8-74.8H411.2c-41.1,0-74.5,33.4-74.5,74.8v51H132.5v37.5h53.8l60.2,741.9c0,41.3,33.4,74.8,74.8,74.8h359.8c41.3,0,74.8-33.4,74.8-74.8l59.5-741.9h52.1V135.8z M373.9,84.8c0-20.7,16.8-37.5,37.3-37.5h177.4c20.7,0,37.3,16.8,37.3,37.5v51H373.9V84.8z M718.5,913.2v1v1c0,20.7-16.8,37.5-37.3,37.5H321.4c-20.7,0-37.3-16.8-37.3-37.5v-1v-1l-60.5-739.8h554.3L718.5,913.2z"/>
        <path d="M482.1,255h35.7v615.1h-35.7V255z"/>
        <path d="M663.3,255h-37.3l-27.3,615.1H636L663.3,255z"/>
        <path d="M373.7,255h-37L364,870.1h37.3L373.7,255z"/></g>
</svg>);
};

export default DeleteIcon;