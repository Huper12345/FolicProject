import React from 'react';
import './Contacts.css';
import { TextButton } from '../../../helpers/TextButton';

export const Contacts = () => {
  return (
    <div className="Contacts-Container" id="Contacts">
      <h2 className="Contacts-Title">
        Производитель - открытое акционерное общество «Борисовский завод
        медицинских препаратов» Республика Беларусь, г. Борисов, ул. Чапаева,
        64, 222518, +375(177) 76 71 96
      </h2>
      <h3 className="Contacts-Subtext">
        ЛЕКАРСТВЕННЫЙ ПРЕПАРАТ. ПЕРЕД ПРИМЕНЕНИЕМ ОЗНАКОМЬТЕСЬ С ИНСТРУКЦИЕЙ И
        ПРОКОНСУЛЬТИРУЙТЕСЬ С ВРАЧОМ
      </h3>

      <a
        href="https://www.rceth.by/NDfiles/instr/23_01_3103_s.pdf"
        target="blank"
        className="TextButton Footer"
      >
        Открыть инструкцию
      </a>
    </div>
  );
};
