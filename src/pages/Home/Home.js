import "./Home.scss";
import { Header } from "../../components/Header";
import {Intro} from "../../components/Intro"
import { Medication } from "../../components/Medication";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Intro />
      <Medication />
    </div>
  );
};
