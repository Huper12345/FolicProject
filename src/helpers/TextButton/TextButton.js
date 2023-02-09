import React from "react";
import "./TextButton.css";
import { Link, animateScroll as scroll } from "react-scroll";

export const TextButton = ({
  text,
  href,
  target,
  className = "TextButton",
}) => {
  return (
    <div className="TextButton-Box">
      <Link
        to={href}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        target={target}
        className={className}
      >
        {text}
      </Link>
    </div>
  );
};
