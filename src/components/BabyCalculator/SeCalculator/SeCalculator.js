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

    //SeDate
    const sedate = new Date(seAge);
    const seMonth = sedate.getMonth();
    const seBirthYear = sedate.getFullYear();
    const seBirthDay = sedate.getDate();

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

    // CalcSeAge

    const calcSeAge = (
      seMonth,
      monthToday,
      seBirthYear,
      yearToday,
      seBirthDay,
      dayToday
    ) => {
      let age = 0;

      if (seMonth < monthToday) {
        age = yearToday - seBirthYear;
      }

      if (seMonth > monthToday) {
        age = yearToday - seBirthYear - 1;
      }

      if (seMonth === monthToday) {
        console.log(dayToday);
        if (seBirthDay > dayToday) {
          age = yearToday - seBirthYear - 1;
        }

        if (seBirthDay <= dayToday) {
          age = yearToday - seBirthYear;
        }
      }
      return age;
    };

    const calcWomanAge =
      womanAge(
        birthMonth,
        monthToday,
        birthYear,
        yearToday,
        birthDay,
        dayToday
      ) + 2;

    const getSeAge =
      calcSeAge(
        seMonth,
        monthToday,
        seBirthYear,
        yearToday,
        seBirthDay,
        dayToday
      ) + 2;

    const getWomanAge = (calcWomanAge, getSeAge) => {
      let womanAge = calcWomanAge - getSeAge;
      return womanAge;
    };

    const getSeMonth = calcSeMonth(seMonth);

    console.log(getWomanAge(calcWomanAge, getSeAge));

    // calcBaby

    const calcSeBaby = (getWomanAge, getSeMonth) => {
      let babyResult = '';

      if (getWomanAge === 18) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 4) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 19) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 4) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 5) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 4 && getSeMonth <= 10) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 11) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 20) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 4 && getSeMonth <= 7) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 9) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 10 && getSeMonth < 12) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 11) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 21) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 2) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 22) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 2 && getSeMonth <= 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 4) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 5) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 6 && getSeMonth <= 7) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 8) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 9) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 23) {
        if (getSeMonth >= 1 && getSeMonth <= 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 2 && getSeMonth <= 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 4 && getSeMonth <= 5) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 6) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 7) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 8) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 8) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 9 && getSeMonth <= 11) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 12) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 24) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 2) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 3 && getSeMonth <= 4) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 5) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 6 && getSeMonth <= 7) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 8) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 25) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 2 && getSeMonth <= 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 4 && getSeMonth <= 5) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 6) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 7 && getSeMonth <= 8) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 9) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 26) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 2) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 4 && getSeMonth <= 5) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 6) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 7) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 8) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 9) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 27) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 4) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 5 && getSeMonth <= 6) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 7 && getSeMonth <= 10) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 11) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 12) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 28) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 2) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 4 && getSeMonth <= 6) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 7 && getSeMonth <= 10) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 11) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 29) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 3 && getSeMonth <= 4) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 5 && getSeMonth <= 6) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 7) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 8 && getSeMonth <= 9) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 9) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 30) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 2 && getSeMonth <= 10) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 11) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 31 && getWomanAge === 32) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 4 && getSeMonth <= 11) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 12) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 33) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 4) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 5 && getSeMonth <= 7) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 8) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 9 && getSeMonth <= 11) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 12) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 34) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 4 && getSeMonth <= 10) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 12) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 35) {
        if (getSeMonth >= 1 && getSeMonth <= 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 4) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 5 && getSeMonth <= 7) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 8) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 9 && getSeMonth <= 10) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 11) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 36) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 2 && getSeMonth <= 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 4) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 5) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 6 && getSeMonth <= 8) {
          babyResult = 'Девочка';
        }

        if (getSeMonth > 9) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 37) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 2) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 3 && getSeMonth <= 4) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 5) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 6) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 7) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 8) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 9) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 10) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 11) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 12) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 38) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 4 && getSeMonth <= 5) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 6) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 7) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 8) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 9) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 10) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 11) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 12) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 39) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 2) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 3 && getSeMonth <= 5) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 6 && getSeMonth <= 7) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 8) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 9) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 10) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth > 11) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 40) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 4) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 5) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 6 && getSeMonth <= 7) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 8) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 9) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 10) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 11) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 12) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 41) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 2) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 4) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 5) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 6) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 7 || getSeMonth === 8) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 9) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 10) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 11) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 12) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 42) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 4) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 5) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 6) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 7) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 8 || getSeMonth === 9) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 10) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 11) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 12) {
          babyResult = 'Девочка';
        }
      }

      if (getWomanAge === 43) {
        if (getSeMonth === 1) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 2) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 4) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 5) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 6) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 7) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 8) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 9) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 44) {
        if (getSeMonth === 1 || getSeMonth === 2) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 3) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 4 && getSeMonth <= 6) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 7) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 8) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 9) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 10) {
          babyResult = 'Мальчик';
        }
        if (getSeMonth >= 11) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge === 45) {
        if (getSeMonth === 1) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 2 && getSeMonth <= 3) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth >= 4 && getSeMonth <= 6) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 7) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 8) {
          babyResult = 'Девочка';
        }

        if (getSeMonth === 9) {
          babyResult = 'Мальчик';
        }

        if (getSeMonth === 10) {
          babyResult = 'Девочка';
        }

        if (getSeMonth >= 11 && getSeMonth <= 12) {
          babyResult = 'Мальчик';
        }
      }

      if (getWomanAge >= 46) {
        babyResult = 'Возраст больше 45';
      }

      if (getWomanAge <= 18) {
        babyResult = 'Возраст меньше 18';
      }

      return babyResult;
    };

    const finalBaby = calcSeBaby(
      getWomanAge(calcWomanAge, getSeAge),
      getSeMonth
    );

    setBaby(finalBaby);
  };

  return (
    <div className="Calculator-Container">
      <form onSubmit={handleSubmit} id="BabyForm" className="BabyForm">
        <div className="BabyContainer WomanAge">
          <h4 className="Woman-Text">Возраст матери</h4>

          <input
            required
            onChange={ageSelect}
            value={age}
            className="BabyInput WomanAge"
            type="date"
          ></input>
        </div>

        <div className="BabyContainer SeDate">
          <h4 className="Woman-Text SeDate">Дата зачатия</h4>

          <input
            required
            onChange={seAgeSelect}
            value={seAge}
            className="BabyInput WomanAge"
            type="date"
          ></input>
        </div>
      </form>

      <textarea
        value={baby}
        className="BabyInput Result"
        type="text"
      ></textarea>
      <button form="BabyForm" type="submit" className="BabyButton">
        Узнать
      </button>
    </div>
  );
};
