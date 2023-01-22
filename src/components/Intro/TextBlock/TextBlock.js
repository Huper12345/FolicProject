import "./TextBlock.css";
import { TextButton } from "../../../helpers/TextButton";


export const TextBlock = () => {
  return (
    <div className="TextBlock">
     <div className="Text-Intro-Box">
          <h1 className="Text-Intro">ФОЛИЕВАЯ КИСЛОТА  В ДОЗИРОВКЕ <span className="Text-Intro-Dosage">0,4</span> МГ
          БЕРЕМЕННОСТЬ БЕЗ ПРОБЛЕМ!
          </h1>
          <div className="Button-Box">
              <TextButton href="#" text="Подробнее" />
              <TextButton href="https://tabletka.by/result?ls=21024" target="blank" text="Где купить?" />
          </div>
    </div>
    </div>
  );
};