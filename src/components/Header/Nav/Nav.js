import React from 'react';
import './Nav.css';

export const Nav = () => {
  return (
    <nav className="Nav">
      <a href="#" className="Nav-Link">
        О препарате
      </a>
      <a href="#" className="Nav-Link">
        Задать вопрос
      </a>
      <a href="#" className="Nav-Link">
        Для беременных
      </a>
    </nav>
  );
};
