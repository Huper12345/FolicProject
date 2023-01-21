import "./Medication.css";
import { Title } from "../../helpers/Title";
import { Product } from "./Product";
import { Subscription } from "../../helpers/Subcsription";

export const Medication = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="Medication">
          < Title text="Препарат рекомендованный" subtext="воз" />
          < Product />
          < Subscription text="ОАО «БЗМП» является единственным белорусским производителем фолиевой кислоты в дозировке 0,4 мг в качестве лекарственного препарата." />
        </div>
      </div>
    </section>
  );
};