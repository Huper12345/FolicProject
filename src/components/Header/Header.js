import React from 'react';
import './Header.scss';
import '../../pages/Home/Home.scss';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { NavToggle } from './Nav/NavToggle';
import { useEffect } from 'react';
import { useState } from 'react';

export const Header = () => {
  const [sticky, setSticky] = useState('');

  // on render, set listener
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = () => {
    const introHeight = document.querySelector('#Intro').offsetHeight;
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= introHeight - 200 ? 'is-sticky' : '';
    setSticky(stickyClass);
  };

  const classes = `Header ${sticky}`;

  return (
    <div id="Header" className={classes}>
      <div className="container container-header">
        <header id="Header__inner" className="Header__inner">
          <Logo />
          <Nav />
        </header>
        <NavToggle />
      </div>
    </div>
  );
};
