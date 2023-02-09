import React from "react";
import "./Subcsription.css";

export const Subscription = ({ text, subtext, href }) => {
  return (
    <div className="Subscription-Container">
      <h3 className="Subscription-Text">
        <a href={href} target="blank" className="Subscription-Subtext">
          {" "}
          {subtext}
        </a>
        {text}
      </h3>
    </div>
  );
};
