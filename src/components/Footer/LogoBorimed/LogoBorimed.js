import React from "react";
import "./LogoBorimed.css";
import LogoFooter from "../../../helpers/assets/Images/Logo/logoBorimed.webp";

export const LogoBorimed = () => {
  return (
    <div className="Logo-Borimed">
      <a
        target="blank"
        className="Logo-Borimed-Link"
        href="https://borimed.com/"
      >
        <img
          src={LogoFooter}
          alt="Logo-Borimed"
          className="Logo-Borimed-Img"
          height="43px"
          width="230px"
        ></img>
      </a>
    </div>
  );
};
