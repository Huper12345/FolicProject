import React from "react"
import { useState } from "react";
import "./Advantages.css";
import { PlusIcon } from "./PlusIcon";


export const Advantages = ({buttonText, droptext, subtext}) => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  

    return (
      <div className="Advantages">
        <button
          className={open ? 'Advantages-Button active' : 'Advantages-Button'}
          onClick={handleOpen}
        ><PlusIcon classIcon={open ? 'Plus-Icon active' : 'Plus-Icon'} /> {buttonText}
        </button>
        {open ? (
          <ul className="Dropdown-Menu">
            <li className="Drop-Menu-Item">
              <h3 className="Drop-Menu-Text">{droptext}<p className="Advantages-Menu-Subtext">{subtext}</p></h3>
            </li>
          </ul>
        ) : null}
      </div>
    );
  };