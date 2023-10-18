import React from "react";
import "./SeText.css";
import Baby from "../../../helpers/assets/Images/BabyCalculator-pack/babyGirl.webp";
import CheckList from "../../../helpers/assets/Files/Чек-лист для будущей мамы.pdf"

export const SeText = () => {
  return (
    <div className="SeText-Container">
      <div className="SeImage">
        <img
          alt="PregandGirl"
          src={Baby}
          className="SeImg"
          width="370px"
          height="258px"
        ></img>
      </div>
      <div className="SeText-Content">
        Ожидание малыша – это всегда волнительный процесс для будущих родителей.
        Сейчас существуют разные методы определения пола ребенка, начиная от
        народных примет и до современных медицинских процедур. В основе нашего
        расчета лежит древняя китайская таблица определения пола ребенка.
        <p classname="SeText-Subtext">
          Согласно легенде таблица была найдена в древней королевской гробнице в
          Китае. Она предсказывает пол ребенка, основываясь на китайском лунном
          календаре. Стоит отметить что лунный возраст отличается от нашего
          возраста, но мы это учли.
        </p>
        <div className="CheckList-Inner">
          <a href={CheckList} target="blank" className="CheckList-button">Чек-лист для будущей мамы</a>
        </div>
      </div>
    </div>
  );
};
