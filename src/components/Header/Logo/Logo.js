import React from 'react';
import './Logo.css';
import LogoT from '../../../helpers/assets/Images/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

export const Logo = () => {
  return (
    <div className="Logo">
      <Link
        className="Logo-Link"
        to="Intro"
        smooth={true}
        offset={-70}
        duration={600}
      >
        <img
          src="https://i.ibb.co/kHJ8znT/logo.png"
          alt="Logo"
          className="Logo-Img"
        ></img>
      </Link>
    </div>
  );
};
