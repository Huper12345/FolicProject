import React from "react";
import "./Intro.scss";
import Girl from "../../helpers/assets/Images/GirlOne.webp";
import GirlP from "../../helpers/assets/Images/GirlPlaceholder/GirlOne.webp";
import { TextBlock } from "./TextBlock";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Intro = () => {
  return (
    <div id="Intro" className="Intro">
      <div className="container">
        <div className="Intro-Inner">
          <TextBlock />
          <LazyLoadImage 
          className="Intro-Background" 
          alt="Girl" 
          src={Girl}
          placeholderSrc={GirlP}
          effect="blur"
          />
        </div>
      </div>
    </div>
  );
};
