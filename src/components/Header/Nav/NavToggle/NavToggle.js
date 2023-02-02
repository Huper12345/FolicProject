import React from 'react';
import { useState } from 'react';
import './NavToggle.css';
import { Link, animateScroll as scroll } from 'react-scroll';

export const NavToggle = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="Nav-Toggle-Container">
      <div className="Toggle-Button-Container">
        <button
          className={open ? 'Nav-Toggle-Button active' : 'Nav-Toggle-Button'}
          onClick={handleOpen}
        >
          1
        </button>
      </div>
      {open ? (
        <ul className="Toggle-Menu">
          <Link
            to="Medication"
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            О препарате
          </Link>

          <Link
            to="DoctorQuestion"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Задать вопрос
          </Link>

          <Link
            to="GoodForYou"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Полезные советы беременным
          </Link>
          <Link
            to="BabyCalculator"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Калькулятор пола ребенка
          </Link>

          <Link
            to="GoodStuff"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Полезные материалы для беременных
          </Link>

          <Link
            to="FAquestions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Часто задаваемые вопросы
          </Link>

          <Link
            to="FAquestions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Информация о производителе
          </Link>
        </ul>
      ) : null}
    </div>
  );
};
