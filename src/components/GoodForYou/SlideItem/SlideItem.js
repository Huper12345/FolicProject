import React from 'react';
import './SlideItem.css';

export const SlideItem = ({ title, src, subtext }) => {
  return (
    <div className="SlideItem-Box">
      <div className="Slide-Title-Box">
        <img
          src="https://i.ibb.co/cwzZsYT/checked2.png"
          alt=""
          className="SlideItem-Icon"
        ></img>
        <h3 className="SlideItem-Title">{title}</h3>
      </div>
      <img src={src} alt="" className="SlideItem-IMG"></img>
      <div className="SlideItem-Subtext">{subtext}</div>
    </div>
  );
};
