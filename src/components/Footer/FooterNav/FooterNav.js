import React from 'react';
import './FooterNav.css';

export const FooterNav = () => {
  return (
    <nav className="Footer-Nav">
      <a href="#Medication" className="Footer-Nav-Link">
        О препарате
      </a>
      <a href="#DoctorQuestion" className="Footer-Nav-Link">
        Задать вопрос
      </a>
      <a href="#GoodForYou" className="Footer-Nav-Link">
        Полезные советы беременным
      </a>
      <a href="#BabyCalculator" className="Footer-Nav-Link">
        Калькулятор пола ребенка
      </a>
      <a href="#GoodStuff" className="Footer-Nav-Link">
        Полезные материалы для беременных
      </a>
      <a href="#FAquestions" className="Footer-Nav-Link">
        Часто задаваемые вопросы
      </a>
      <a href="https://tabletka.by/result?ls=21024" target="blank" className="Footer-Nav-Link">
        Где купить?
      </a>
    </nav>
  );
};
