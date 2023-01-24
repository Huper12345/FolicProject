import React from "react"
import "./BabyCalculator.css";
import { Title } from "../../helpers/Title";


export const BabyCalculator = () => {
  return (
    <section className="section"> 
        <Title className="Title-Text babycalculator" text="Калькулятор пола" subtext="ребенка" subClassName="Title-Subtext babycalculator " />
    </section>
  );
};