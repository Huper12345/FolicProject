import React from "react";
import "./GoodForYou.css";
import { Carousel } from "./Carousel";
import { SlideItem } from "./SlideItem";
import CheckIcon from "../../helpers/assets/Images/GoodForYou-Pack/checked2.webp";
import Slide1 from "../../helpers/assets/Images/GoodForYou-Pack/slideONE.webp";
import Slide2 from "../../helpers/assets/Images/GoodForYou-Pack/slide2.webp";
import Slide3 from "../../helpers/assets/Images/GoodForYou-Pack/Slide3.webp";
import Slide4 from "../../helpers/assets/Images/GoodForYou-Pack/slide4.webp";
import Slide5 from "../../helpers/assets/Images/GoodForYou-Pack/slide5.webp";
import Slide6 from "../../helpers/assets/Images/GoodForYou-Pack/slide6.webp";
import Slide7 from "../../helpers/assets/Images/GoodForYou-Pack/slide7.webp";
import Slide8 from "../../helpers/assets/Images/GoodForYou-Pack/slide8.webp";
import Slide9 from "../../helpers/assets/Images/GoodForYou-Pack/slide9.webp";
import Slide2P from "../../helpers/assets/Images/GoodForYou-Pack/placeholder/slide2P.webp"

export const GoodForYou = () => {
  return (
    <section className="section section--goodforyou" id="GoodForYou">
      <div className="container">
        <div className="GoodForYou">
          <Carousel>
            <SlideItem
              title="Полезные советы беременным!"
              subtext="Беременность — волшебное время и каждой маме обязательно нужно запомнить каждый момент, каждый день и каждую деталь, происходящую с ней. Пережитые чувства смогут больше никогда не повториться. Для того, чтобы вы чувствовали себя полноценно и жизнерадостно, следует соблюдать ряд рекомендаций и прислушиваться к полезным советам."
              src={Slide1}
              icon={CheckIcon}
              alt="pregantWoman"
              height="200px"
              width="83px"
              PImage={Slide2P}
            />

            <SlideItem
              title="Встаньте на учёт в женской консультации"
              subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии."
              src={Slide2}
              icon={CheckIcon}
              alt="uzi"
            />

            <SlideItem
              title="Не отказывайтесь от фолиевой кислоты"
              subtext="Это важный элемент, способствующий развитию плода и созданию всех благоприятных условий для него. Фолиевую кислоту рекомендуется принимать при планировании и с первого дня беременности."
              src={Slide3}
              icon={CheckIcon}
              alt="folicacid"
            />

            <SlideItem
              title="Ухаживайте за своей красотой грамотно"
              subtext="Откажитесь от негативных процедур: бани, сауны, лазерной эпиляции, окраски волос аммиачными красками, не наносите татуировки, не производите омоложение ботоксом."
              src={Slide4}
              icon={CheckIcon}
              alt="beauty"
            />

            <SlideItem
              title="Питайтесь правильно"
              subtext="Употребляйте в пищу полезные фрукты и овощи, откажитесь от быстрой и уличной пищи. Не пропускайте приёмы пищи и ни в коем случае не «сидите» на диетах для похудения."
              src={Slide5}
              icon={CheckIcon}
              alt="goodfood"
            />

            <SlideItem
              title="Развивайтесь"
              subtext="Беременность — время для самосовершенствования и познания себя. Запишитесь на специальные курсы для будущих мам, ведите дневник беременности, улыбайтесь."
              src={Slide6}
              icon={CheckIcon}
              alt="sport"
            />

            <SlideItem
              title="Чаще находитесь на свежем воздухе"
              subtext="Избежать плохого самочувствия поможет свежий воздух и регулярные прогулки."
              src={Slide7}
              icon={CheckIcon}
              alt="goodair"
            />

            <SlideItem
              title="Посещайте гинеколога ежемесячно"
              subtext="Не пропускайте ни одного назначенного приёма. После родов следует посетить гинеколога спустя месяц."
              src={Slide8}
              icon={CheckIcon}
              alt="doctor"
            />

            <SlideItem
              title="Принимайте все назначенные врачом препараты и посещайте каждое УЗИ"
              subtext="Прислушивайтесь к своему организму и, если обнаруживаете отклонения, не старайтесь их излечить самостоятельно."
              src={Slide9}
              icon={CheckIcon}
              alt="medication"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
