import React from 'react';
import './RotateImage.css';

export const RotateImage = ({ classRotate }) => {
  return (
    <div className="Gender-Container">
      <img
        className={classRotate}
        src="https://i.ibb.co/ck5Tcf9/gender.png"
      ></img>
    </div>
  );
};
