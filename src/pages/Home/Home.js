import React from 'react';
import './Home.scss';
import { Header } from '../../components/Header';
import { Intro } from '../../components/Intro';
import { Medication } from '../../components/Medication';
import { GoodForYou } from '../../components/GoodForYou';
import { BabyCalculator } from '../../components/BabyCalculator';
import { GoodStuff } from '../../components/GoodStuff';
import { FAquestions } from '../../components/FAquestions';
import { Footer } from '../../components/Footer';

export const Home = (props) => {
  

  return (
    <div className="Home">
      <Header  />
      <Intro  />
      <Medication />
      <GoodForYou />
      <BabyCalculator />
      <GoodStuff />
      <FAquestions />
      <Footer />
    </div>
  );
};
