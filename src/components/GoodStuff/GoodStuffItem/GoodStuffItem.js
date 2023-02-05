import React from "react";
import { useState } from "react";
import "./GoodStuffItem.css";

export const GoodStuffItem = ({
  title,
  subText,
  dropTitle1,
  dropText1,
  dropTitle2,
  dropText2,
  dropTitle3,
  dropText3,
  dropTitle4,
  dropText4,
  dropTitle5,
  dropText5,
  dropTitle6,
  dropText6,
  dropTitle7,
  dropText7,
  dropTitle8,
  dropText8,
  dropTitle9,
  dropText9,
  dropTitle10,
  dropText10,
  dropTitle11,
  dropText11,
  Image,
  dropLink7,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      id="GoodStuff"
      className={open ? "GoodStuff-Item active" : "GoodStuff-Item"}
      onClick={handleOpen}
    >
      <div className="GoodStuff-Content">
        <div className="GoodStuff-Image">
          <img
            src={Image}
            width="640px"
            height="593px"
            alt="Good"
            className="GoodStuff-Img"
          >
          </img>
        </div>

        <div className="GoodStuff-Box">
          <div className="GoodStuff-Box-Inner">
            <h3 className="GoodStuff-Text">{title}</h3>
            <div className="GoodStuff-Subtext">{subText}</div>
            <div className="GoodStuff-Click">Подробнее</div>
          </div>
        </div>
        <div className="GoodStuff-Click Mobile">Подробнее </div>
      </div>
      {open ? (
        <ul className="Stuff-Menu">
          <li id="Stuff-Menu-Item" className="Stuff-Menu-Item">
            <div className="Stuff-Menu-Text">
              <span className="Stuff-Drop-Title">{dropTitle1}</span>
              {dropText1}
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle2}</span>
                {dropText2}
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle3}</span>
                {dropText3}
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle4}</span>
                {dropText4}
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle5}</span>
                {dropText5}
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle6}</span>
                {dropText6}
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle7}</span>
                {dropText7}
                <a
                  href="https://son-by.by/"
                  target="blank"
                  className="Stuff-Drop-Link"
                >
                  {dropLink7}
                </a>
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle8}</span>
                {dropText8}
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle9}</span>
                {dropText9}
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle10}</span>
                {dropText10}
              </p>
              <p className="Stuff-Text-P">
                <span className="Stuff-Drop-Title">{dropTitle11}</span>
                {dropText11}
              </p>
            </div>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
