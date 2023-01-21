import "./Intro.scss";
import Girl from '../../helpers/assets/Images/dev2.webp'
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