import React from 'react';
import './SeCalculator.css';
import { useState } from 'react';

export const SeCalculator = () => {
  const [baby, setBaby] = useState('Результат');
  const [age, setAge] = useState(0);
  const [seAge, setSeAge] = useState(0);

  const ageSelect = (e) => {
    setAge(e.target.value);
  };

  const seAgeSelect = (e) => {
    setSeAge(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Now

    const dateToday = new Date();

    const dayToday = dateToday.getDate();

    const monthToday = dateToday.getMonth() + 1;

    const yearToday = dateToday.getFullYear();

    //Age
    const date = new Date(age);

    const birthYear = date.getFullYear();

    const birthMonth = date.getMonth() + 1;

    const birthDay = date.getDate();

    //SeMonth
    const sedate = new Date(seAge);
    const seMonth = sedate.getMonth();

    //CalcseMonth
    const calcSeMonth = (seMonth) => {
      let seAge = 0;

      if (seMonth === 0) {
        seAge = 12;
      } else {
        seAge = seMonth;
      }

      return seAge;
    };
    //CalcAge
    const womanAge = (
      birthMonth,
      monthToday,
      birthYear,
      yearToday,
      birthDay,
      dayToday
    ) => {
      let age = 0;

      if (birthMonth < monthToday) {
        age = yearToday - birthYear;
      }

      if (birthMonth > monthToday) {
        age = yearToday - birthYear - 1;
      }

      if (birthMonth === monthToday) {
        console.log(dayToday);
        if (birthDay > dayToday) {
          age = yearToday - birthYear - 1;
        }

        if (birthDay <= dayToday) {
          age = yearToday - birthYear;
        }
      }

      return age;
    };

    const getWomanAge =
      womanAge(
        birthMonth,
        monthToday,
        birthYear,
        yearToday,
        birthDay,
        dayToday
      ) + 2;

    const getSeAge = calcSeMonth(seMonth);

    setBaby(getWomanAge);
  };

  return (
    <div className="Calculator-Container">
      <form onSubmit={handleSubmit} id="BabyForm" className="BabyForm">
        <div className="BabyContainer WomanAge">
          <h4 className="Woman-Text">Возраст матери</h4>

          <input
            onChange={ageSelect}
            value={age}
            className="BabyInput WomanAge"
            type="date"
          ></input>
        </div>

        <div className="BabyContainer SeDate">
          <h4 className="Woman-Text SeDate">Дата зачатия</h4>

          <input
            onChange={seAgeSelect}
            value={seAge}
            className="BabyInput WomanAge"
            type="date"
          ></input>
        </div>
      </form>

      <input value={baby} className="BabyInput Result" type="text"></input>
      <button form="BabyForm" type="submit" className="BabyButton">
        Узнать
      </button>
    </div>
  );
};
