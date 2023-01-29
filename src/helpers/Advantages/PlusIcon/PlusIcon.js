import React from 'react';
import './PlusIcon.css';

export const PlusIcon = ({classIcon}) => {
  

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      className={classIcon}
      viewBox="0 0 512 512"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z"
      />
    </svg>
  );
};
