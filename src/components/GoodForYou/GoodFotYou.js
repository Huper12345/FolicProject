import React from 'react';
import './GoodForYou.css';
import { Carousel } from './Carousel';
import { SlideItem } from './SlideItem';
import Slide1 from '../../helpers/assets/Images/GoodForYou-Pack/1.png';

export const GoodForYou = () => {
  return (
    <section className="section section--goodforyou">
      <div className="container">
        <div className="GoodForYou">
          <Carousel>
            <SlideItem
              title="Встаньте на учёт в женской консультации"
              subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии."
              src="https://i.ibb.co/8zb2n67/1.png"
            />

            <SlideItem
              title="Встаньте на учёт в женской консультации"
              subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии."
              src="https://i.ibb.co/8zb2n67/1.png"
            />

            <SlideItem
              title="Встаньте на учёт в женской консультации"
              subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии."
              src="https://i.ibb.co/8zb2n67/1.png"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
