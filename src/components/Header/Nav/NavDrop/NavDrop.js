import React from 'react';
import { useState } from 'react';
import './NavDrop.css';
import { Link, animateScroll as scroll } from "react-scroll";

export const NavDrop = ({
  buttonText,
  droptext,
  droptext2,
  droptext3,
  NavClass = 'NavDrop',
  href = '#',
  href1 = '#',
  href2 = '#',
  href3 = '#',
  droptext4,
  href4 = '#',
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={NavClass} onMouseLeave={handleClose}>
        <Link
        to={href}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        onMouseEnter={handleOpen}
        className={open ? 'NavDrop-Button active' : 'NavDrop-Button'}
        onClick={handleClose}
      >
        {buttonText}
      </Link>
      {open ? (
        <ul className="NavDrop-Menu">
          <li className="NavDrop-Item">
            <Link
              to={href1}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={handleClose}
              className="NavDrop-Link"
            >
              {droptext}
            </Link>
          </li>
          <li className="NavDrop-Item">
            <Link
              to={href2}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={handleClose}
              className="NavDrop-Link"
            >
              {droptext2}
            </Link>
          </li>
          <li className="NavDrop-Item">
            <Link
              to={href3}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={handleClose}
              className="NavDrop-Link"
            >
              {droptext3}
            </Link>
          </li>
          <li className="NavDrop-Item">
            <Link
              to={href4}
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              onClick={handleClose}
              className="NavDrop-Link"
            >
              {droptext4}
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
