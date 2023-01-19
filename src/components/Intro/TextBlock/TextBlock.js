import "./TextBlock.css";
import TextBlockBG from "../../../helpers/assets/Images/fonOblako.png"
import { TextButton } from "./TextButton";


export const TextBlock = () => {
  return (
    <div className="TextBlock">
     <div className="Text-Intro-Box">
        <h1 className="Text-Intro">ФОЛИЕВАЯ КИСЛОТА  В ДОЗИРОВКЕ <span className="Text-Intro-Dosage">0,4</span> МГ
        БЕРЕМЕННОСТЬ БЕЗ ПРОБЛЕМ!
        </h1>
        <div className="Button-Box">
            <TextButton href="#" text="Подробнее" />
            <TextButton href="#" text="Где купить?" />
        </div>
    </div>
       <div className="ntroTextBG-Box">
        <img src={TextBlockBG} alt="IntroTextBG" className="TextBlock-BG"></img>
        </div>
    </div>
  );
};