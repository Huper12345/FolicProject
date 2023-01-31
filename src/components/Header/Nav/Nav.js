import React from 'react';
import './Nav.css';
import { NavDrop } from './NavDrop';
import { Link, animateScroll as scroll } from "react-scroll";

export const Nav = () => {
  return (
    <nav className="Nav">
      <NavDrop
        buttonText="О препарате"
        href="Medication"
        droptext="Инструкция"
        href1="Contacts"
        droptext2="Часто задаваемые вопросы"
        href2="FAquestions"
        droptext3="О производителе"
        href3="Contacts"
        NavClass="NavDrop product"
      />
      <NavDrop
        buttonText="Для беременных"
        href="GoodForYou"
        droptext="Полезные советы беременным"
        href1="GoodForYou"
        droptext2="Калькулятор пола ребенка"
        href2="BabyCalculator"
        droptext3="Полезные материалы для беременных"
        href3="FAquestions"
        NavClass="NavDrop pregant"
      />
      <Link 
      to="DoctorQuestion"
      smooth={true}
      offset={-70}
      duration={600}
      className="Nav-Link">
        Задать вопрос
      </Link>
    </nav>
  );
};
