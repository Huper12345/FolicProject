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
            onClick={handleOpen}
            to="Medication"
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            О препарате
          </Link>

          <Link
            onClick={handleOpen}
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
            onClick={handleOpen}
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
            onClick={handleOpen}
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
            onClick={handleOpen}
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
            onClick={handleOpen}
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
            onClick={handleOpen}
            to="Contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            className="Toggle-Menu-Item"
          >
            Информация о производителе
          </Link>

          <a
            href="https://tabletka.by/result?ls=21024"
            className="Toggle-Menu-Item"
            target="blank"
          >
            {' '}
            Где купить?
          </a>
        </ul>
      ) : null}
    </div>
  );
};
