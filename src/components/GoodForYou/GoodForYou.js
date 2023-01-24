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
              title="Полезные советы беременным!"
              subtext="Беременность — волшебное время и каждой маме обязательно нужно запомнить каждый момент, каждый день и каждую деталь, происходящую с ней. Пережитые чувства смогут больше никогда не повториться. Для того, чтобы вы чувствовали себя полноценно и жизнерадостно, следует соблюдать ряд рекомендаций и прислушиваться к полезным советам."
              src="https://i.ibb.co/KrrF2kQ/slideONE.png"
            />

            <SlideItem
              title="Встаньте на учёт в женской консультации"
              subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии."
              src="https://i.ibb.co/8zb2n67/1.png"
            />

            <SlideItem
              title="Не отказывайтесь от фолиевой кислоты"
              subtext="Это важный элемент, способствующий развитию плода и созданию всех благоприятных условий для него. Фолиевую кислоту рекомендуется принимать при планировании и с первого дня беременности."
              src="https://i.ibb.co/72JdcT8/Slide3.png"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
