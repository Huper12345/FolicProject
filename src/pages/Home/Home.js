import "./Home.scss";
import { Header } from "../../components/Header";
import {Intro} from "../../components/Intro"
import { Medication } from "../../components/Medication";
import { GoodForYou } from "../../components/GoodForYou";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Intro />
      <Medication />
      <GoodForYou />
    </div>
  );
};
