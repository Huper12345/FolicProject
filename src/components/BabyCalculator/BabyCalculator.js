import React from 'react';
import './BabyCalculator.css';
import { Title } from '../../helpers/Title';
import { SeCalculator } from './SeCalculator';
import { SeText } from './SeText';

export const BabyCalculator = () => {
  return (
    <section className="section" id='BabyCalculator'>
      <div className="container">
        <Title
          className="Title-Text babycalculator"
          text="Калькулятор пола"
          subtext="ребенка"
          subClassName="Title-Subtext babycalculator "
        />
        <div className="BabyCalculator-Inner">
          <SeText />
          <SeCalculator />
        </div>
      </div>
    </section>
  );
};
