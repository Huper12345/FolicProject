import React from "react";
import "./RotateImage.css";
import RotateImg from "../../../../helpers/assets/Images/BabyCalculator-pack/gender.webp";

export const RotateImage = ({ classRotate }) => {
  return (
    <div className="Gender-Container">
      <img alt="gender" className={classRotate} src={RotateImg}></img>
    </div>
  );
};
