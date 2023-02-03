import React from "react";
import "./GoodForYou.css";
import { Carousel } from "./Carousel";
import { SlideItem } from "./SlideItem";
import CheckIcon from "../../helpers/assets/Images/GoodForYou-Pack/checked2.webp";
import Slide1 from "../../helpers/assets/Images/GoodForYou-Pack/slideONE.webp";

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
            />

            <SlideItem
              title="Встаньте на учёт в женской консультации"
              subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии."
              src="https://i.ibb.co/8zb2n67/1.png"
              icon={CheckIcon}
            />

            <SlideItem
              title="Не отказывайтесь от фолиевой кислоты"
              subtext="Это важный элемент, способствующий развитию плода и созданию всех благоприятных условий для него. Фолиевую кислоту рекомендуется принимать при планировании и с первого дня беременности."
              src="https://i.ibb.co/72JdcT8/Slide3.png"
              icon={CheckIcon}
            />

            <SlideItem
              title="Ухаживайте за своей красотой грамотно"
              subtext="Откажитесь от негативных процедур: бани, сауны, лазерной эпиляции, окраски волос аммиачными красками, не наносите татуировки, не производите омоложение ботоксом."
              src="https://i.ibb.co/D59KfzV/slide4.png"
              icon={CheckIcon}
            />

            <SlideItem
              title="Питайтесь правильно"
              subtext="Употребляйте в пищу полезные фрукты и овощи, откажитесь от быстрой и уличной пищи. Не пропускайте приёмы пищи и ни в коем случае не «сидите» на диетах для похудения."
              src="https://i.ibb.co/4VX9HdK/slide5.png"
              icon={CheckIcon}
            />

            <SlideItem
              title="Развивайтесь"
              subtext="Беременность — время для самосовершенствования и познания себя. Запишитесь на специальные курсы для будущих мам, ведите дневник беременности, улыбайтесь."
              src="https://i.ibb.co/4p611bZ/slide6.png"
              icon={CheckIcon}
            />

            <SlideItem
              title="Чаще находитесь на свежем воздухе"
              subtext="Избежать плохого самочувствия поможет свежий воздух и регулярные прогулки."
              src="https://i.ibb.co/jLWMmQT/slide7.png"
              icon={CheckIcon}
            />

            <SlideItem
              title="Посещайте гинеколога ежемесячно"
              subtext="Не пропускайте ни одного назначенного приёма. После родов следует посетить гинеколога спустя месяц."
              src="https://i.ibb.co/6wNPmv3/slide8.png"
              icon={CheckIcon}
            />

            <SlideItem
              title="Принимайте все назначенные врачом препараты и посещайте каждое УЗИ"
              subtext="Прислушивайтесь к своему организму и, если обнаруживаете отклонения, не старайтесь их излечить самостоятельно."
              src="https://i.ibb.co/cLfBBH7/slide9.png"
              icon={CheckIcon}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
