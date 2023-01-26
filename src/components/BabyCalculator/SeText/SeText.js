import React from 'react';
import './SeText.css';

export const SeText = () => {
  return (
    <div className="SeText-Container">
      <div className="SeImage">
        <img
          className="SeImage-Img"
          src="https://i.ibb.co/8bSxXxV/babyGirl.jpg"
          className="SeImg"
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
      </div>
    </div>
  );
};