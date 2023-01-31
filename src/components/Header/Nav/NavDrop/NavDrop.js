import React from 'react';
import { useState } from 'react';
import './NavDrop.css';

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
  target = '',
  target1 = '',
  target2 = '',
  target3 = '',
  droptext4,
  href4 = '#',
  target4 = '',
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
      <a
        href={href}
        target={target}
        onMouseEnter={handleOpen}
        className={open ? 'NavDrop-Button active' : 'NavDrop-Button'}
        onClick={handleClose}
      >
        {buttonText}
      </a>
      {open ? (
        <ul className="NavDrop-Menu">
          <li className="NavDrop-Item">
            <a
              onClick={handleClose}
              href={href1}
              target={target1}
              className="NavDrop-Link"
            >
              {droptext}
            </a>
          </li>
          <li className="NavDrop-Item">
            <a
              onClick={handleClose}
              href={href2}
              target={target2}
              className="NavDrop-Link"
            >
              {droptext2}
            </a>
          </li>
          <li className="NavDrop-Item">
            <a
              onClick={handleClose}
              href={href3}
              target={target3}
              className="NavDrop-Link"
            >
              {droptext3}
            </a>
          </li>
          <li className="NavDrop-Item">
            <a
              onClick={handleClose}
              href={href4}
              target={target4}
              className="NavDrop-Link"
            >
              {droptext4}
            </a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
