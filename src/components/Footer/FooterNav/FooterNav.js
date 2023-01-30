import React from 'react';
import './FooterNav.css';

export const FooterNav = () => {
  return (
    <nav className="Footer-Nav">
      <a href="#" className="Footer-Nav-Link">
        О препарате
      </a>
      <a href="#" className="Footer-Nav-Link">
        Задать вопрос
      </a>
      <a href="#" className="Footer-Nav-Link">
        Для беременных
      </a>
      <a href="#" className="Footer-Nav-Link">
        Полезные советы беременным
      </a>
      <a href="#" className="Footer-Nav-Link">
        Калькулятор пола ребенка
      </a>
      <a href="#" className="Footer-Nav-Link">
        Полезные материалы для беременных
      </a>
      <a href="#" className="Footer-Nav-Link">
        Часто задаваемые вопросы
      </a>
      <a href="#" className="Footer-Nav-Link">
        Вопрос врачу
      </a>
      <a href="https://tabletka.by/result?ls=21024" target="blank" className="Footer-Nav-Link">
        Где купить?
      </a>
    </nav>
  );
};
