import React from 'react';

const PLusIcon = ({className, onClick}) => {
  return (
    <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" id="plus">
      <path
        d="M72.5 46.5c0 2.5-2 4.5-4.5 4.5H50v17c0 2.5-2 4.5-4.5 4.5S41 70.5 41 68V51H24c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h17V24c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v18h18c2.5 0 4.5 2 4.5 4.5z"/>
    </svg>);
};

export default PLusIcon;