import React from "react"
import "./Title.css";

export const Title = ({text, subtext, href, className = "Title-Text"}) => {
  return (
    <div className="Title-Container">
        <h2 className={className}>{text}<a href={href} target="blank" className="Title-Subtext"> {subtext}</a></h2>
    </div>
  );
};