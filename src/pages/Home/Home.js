import "./Home.scss";
import { Header } from "../../components/Header";
import {Intro} from "../../components/Intro"

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Intro />
    </div>
  );
};
