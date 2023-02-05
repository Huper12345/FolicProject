import React from "react"
import "./ProductImage.css";
import FolicPack from '../../../../helpers/assets/Images/folicnew3.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ProductImage = () => {
  return (
    <div className="ProductImage">
        <LazyLoadImage src={FolicPack} className="ProducImage-Img" alt="FolicAcid"/>
    </div>
  );
};