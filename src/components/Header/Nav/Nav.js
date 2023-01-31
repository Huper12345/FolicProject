import React from 'react';
import './Nav.css';
import { NavDrop } from './NavDrop';

export const Nav = () => {
  return (
    <nav className="Nav">
      <NavDrop
        buttonText="О препарате"
        href="Medication"
        droptext="Инструкция"
        href1="Contacts-Container"
        droptext2="Вопрос врачу"
        href2="DoctorQuestion"
        droptext3="Часто задаваемые вопросы"
        href3="FAquestions"
        droptext4="О производителе"
        href4="Contacts"
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
      <a href="#" className="Nav-Link">
        Задать вопрос
      </a>
    </nav>
  );
};
