import React from "react";
import "./Logo.css";
import LogoT from "../../../helpers/assets/Images/Logo/MainLogoOpt.webp";
import { Link, animateScroll as scroll } from "react-scroll";

export const Logo = () => {
  return (
    <div className="Logo">
      <Link
        className="Logo-Link"
        to="Intro"
        smooth={true}
        offset={-70}
        duration={600}
      >
        <img
          src={LogoT}
          alt="Logo"
          className="Logo-Img"
          width="150px"
          height="58px"
        ></img>
      </Link>
    </div>
  );
};
