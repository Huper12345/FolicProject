import React from "react"
import "./TextButton.css";

export const TextButton = ({text, href, target, className="TextButton"}) => {
  return (
    <div className="TextButton-Box">
        <a href={href} target={target} className={className}>{text}
        </a>
    </div>
  );
};