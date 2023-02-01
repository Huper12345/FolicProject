import React from 'react';
import './FooterNav.css';

import { Link, animateScroll as scroll } from 'react-scroll';

export const FooterNav = () => {
  return (
    <nav className="Footer-Nav">
      <Link
        to="Medication"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        О препарате
      </Link>

      <Link
        to="DoctorQuestion"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Задать вопрос
      </Link>

      <Link
        to="GoodForYou"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Полезные советы беременным
      </Link>

      <Link
        to="BabyCalculator"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Калькулятор пола ребенка
      </Link>

      <Link
        to="GoodStuff"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Полезные материалы для беременных
      </Link>

      <Link
        to="FAquestions"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className="Footer-Nav-Link"
      >
        Часто задаваемые вопросы
      </Link>

      <a
        href="https://www.rceth.by/NDfiles/instr/23_01_3103_s.pdf"
        target="blank"
        className="TextButton Footer"
      ></a>
    </nav>
  );
};
