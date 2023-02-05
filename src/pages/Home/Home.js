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
import LazyHydrate from "react-lazy-hydration";

export const Home = () => {
  

  return (
    <div className="Home">
      <LazyHydrate whenIdle>
        <Header  />
        <Intro  />
        <Medication />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <GoodForYou />
        <BabyCalculator />
        <GoodStuff />
        <FAquestions />
        <Footer />
      </LazyHydrate>
    </div>
  );
};
