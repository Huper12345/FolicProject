import React from 'react';
import './Intro.scss';
import Girl from '../../helpers/assets/Images/dev2.webp';
import { TextBlock } from './TextBlock';


export const Intro = () => {
  
  
  return (
    <div id="Intro" className="Intro">
      <div className="container">
        <div className="Intro-Inner">
          <TextBlock />
          <img
            className="Intro-Background"
            alt="Girl"
            src="https://i.ibb.co/1MyHGxF/devushka6.png"
          ></img>
        </div>
      </div>
    </div>
  );
};
