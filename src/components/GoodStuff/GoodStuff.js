import React from 'react';
import './GoodStuff.css';
import { Title } from '../../helpers/Title';
import { GoodStuffItem } from './GoodStuffItem';

export const GoodStuff = () => {
  return (
    <section className="section">
      <div className="GoodStuff">
        <div className="container">
          <div className="GoodStuff-Inner">
            <Title text="Полезные материалы для" subtext="беременных" />
            <GoodStuffItem />
          </div>
        </div>
      </div>
    </section>
  );
};
