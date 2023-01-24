import React from 'react';
import './Intro.scss';
import Girl from '../../helpers/assets/Images/dev2.webp';
import { TextBlock } from './TextBlock';

export const Intro = () => {
  return (
    <div className="Intro">
      <div className="container">
        <div className="Intro-Inner">
          <TextBlock />
          <img
            className="Intro-Background"
            alt="Girl"
            src="https://i.ibb.co/XXqtmxW/devushka5.png"
            alt="devushka3"
          ></img>
        </div>
      </div>
    </div>
  );
};
