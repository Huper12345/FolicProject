import React from "react";
import "./Title.css";

export const Title = ({
  text,
  subtext,
  href,
  className = "Title-Text",
  subClassName = "Title-Subtext",
}) => {
  return (
    <div className="Title-Container">
      <h2 className={className}>
        {text}
        <a href={href} target="blank" className={subClassName}>
          {" "}
          {subtext}
        </a>
      </h2>
    </div>
  );
};
