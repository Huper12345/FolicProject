import "./GoodForYou.css";
import { Title } from "../../helpers/Title";
import { Carousel } from "./Carousel";
import { SlideItem } from "./SlideItem";
import Slide1 from "../../helpers/assets/Images/GoodForYou-Pack/1.png"


export const GoodForYou = () => {
  return (
    <section className="section section--goodforyou">
      <div className="container">
        <div className="GoodForYou">
          <Title className="Title-Text Good" text="Полезные советы беременным" />
          <hr className="hrGood"></hr>
          
          <Carousel>
            <SlideItem title="Встаньте на учёт в женской консультации" subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии." src={Slide1} />

            <SlideItem title="Встаньте на учёт в женской консультации" subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии." src={Slide1} />

            <SlideItem title="Встаньте на учёт в женской консультации" subtext="Сделать это нужно не раньше 8-й и не позже 12-й недели беременности. В этот период назначается первое УЗИ, где опытный врач осматривает плод и делает выводы о его развитии." src={Slide1} />
          </Carousel>

        </div>
      </div>
    </section>
  );
};