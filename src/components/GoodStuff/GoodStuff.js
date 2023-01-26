import React from 'react';
import './GoodStuff.css';
import { Title } from '../../helpers/Title';

export const GoodStuff = () => {
  return (
    <section className="section">
      <div className="GoodStuff">
        <div className="Container">
          <div className="GoodStuff-Inner">
            <Title text="Полезные материалы для" subtext="беременных" />
          </div>
        </div>
      </div>
    </section>
  );
};
