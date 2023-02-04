import React from "react";
import "./SlideItem.css";

export const SlideItem = ({
  title,
  src,
  subtext,
  icon,
  height = "260px",
  width = "300px",
  alt = "",
}) => {
  return (
    <div className="SlideItem-Box">
      <div className="Slide-Title-Box">
        <img
          src={icon}
          width="45px"
          height="45px"
          alt="Slide-Icon"
          className="SlideItem-Icon"
        ></img>
        <h3 className="SlideItem-Title">{title}</h3>
      </div>
      <img
        src={src}
        height={height}
        width={width}
        alt={alt}
        className="SlideItem-IMG"
      ></img>
      <div className="SlideItem-Subtext">{subtext}</div>
    </div>
  );
};
