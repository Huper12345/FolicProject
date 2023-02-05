import React from "react";
import "./SlideItem.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const SlideItem = ({
  title,
  src,
  subtext,
  icon,
  height = "260px",
  width = "300px",
  alt = "",
  PImage="",
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
      <LazyLoadImage
        src={src}
        height={height}
        width={width}
        alt={alt}
        placeholderSrc={PImage}
        effect = "opacity"
        className="SlideItem-IMG"
      />
      <div className="SlideItem-Subtext">{subtext}</div>
    </div>
  );
};
