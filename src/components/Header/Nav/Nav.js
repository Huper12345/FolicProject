import React from 'react';
import './Nav.css';
import { NavDrop } from './NavDrop';

export const Nav = () => {
  return (
    <nav className="Nav">
      <NavDrop
        buttonText="О препарате"
        href="#Medication"
        droptext="Инструкция"
        href1="https://www.rceth.by/NDfiles/instr/23_01_3103_s.pdf"
        target1="blank"
        droptext2="Вопрос врачу"
        href2="#DoctorQuestion"
        droptext3="Часто задаваемые вопросы"
        href3="#FAquestions"
      />
      <a href="#" className="Nav-Link">
        Задать вопрос
      </a>
      <a href="#" className="Nav-Link">
        Для беременных
      </a>
    </nav>
  );
};
