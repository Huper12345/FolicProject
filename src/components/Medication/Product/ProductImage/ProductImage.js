import React from "react";
import "./ProductImage.css";
import FolicPack from "../../../../helpers/assets/Images/folicnew3.webp";

export const ProductImage = () => {
  return (
    <div className="ProductImage">
      <img src={FolicPack} className="ProducImage-Img" alt="FolicAcid">
      </img>
    </div>
  );
};
