import React from "react"
import "./Button.css";

export const Button = ({form, text, className="Button"}) => {
  return (
        <button 
        form={form}
        className={className}>
          {text}
        </button>

  );
};