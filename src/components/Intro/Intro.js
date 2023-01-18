import "./Intro.css";
import Girl from '../../helpers/assets/Images/dev.png'

export const Intro = () => {
  return (
    <div className="Intro">
      <div className="container">
        <div className="Intro-Inner">
        <img className="Intro-Background" alt="Gitl" src={Girl}></img>
        </div>
      </div>
    </div>
  );
};