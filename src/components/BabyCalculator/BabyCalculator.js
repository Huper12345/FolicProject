import React from 'react';
import './BabyCalculator.css';
import { Title } from '../../helpers/Title';
import { SeCalculator } from './SeCalculator';

export const BabyCalculator = () => {
  return (
    <section className="section">
      <div className="container">
        <Title
          className="Title-Text babycalculator"
          text="Калькулятор пола"
          subtext="ребенка"
          subClassName="Title-Subtext babycalculator "
        />
        <div className="BabyCalculator-Inner">
          <SeCalculator />
        </div>
      </div>
    </section>
  );
};
