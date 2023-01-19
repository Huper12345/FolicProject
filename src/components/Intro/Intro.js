import "./Intro.css";
import Girl from '../../helpers/assets/Images/dev.png'
import { TextBlock } from "./TextBlock";

export const Intro = () => {
  return (
    <div className="Intro">
      <div className="container">
        <div className="Intro-Inner">
          <TextBlock />
          <img className="Intro-Background" alt="Girl" src={Girl}></img>
        </div>
      </div>
    </div>
  );
};