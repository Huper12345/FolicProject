import "./Product.css";
import { ProductImage } from "./ProductImage";
import { Advantages } from "./Advantages";

export const Product = () => {
  return (
    <div className="Product">
        <ProductImage />
        <div className="Advantages-Box">
            <Advantages buttonText="Для женщин планирующих беременность" droptext="Фолиевая кислота снижает риск развития патологий нервной трубки у плода. Прием фолиевой кислоты в первом триместре способствует формированию здорового ребенка." />
            <Advantages buttonText="Дозировка рекомендована ВОЗ" droptext="Беременным женщинам рекомендовано назначать фолиевую кислоту 400 мкг (0,4 мг) ежедневно для профилактики анемии, послеродового сепсиса, рождения маловесного ребенка и преждевременных родов." />
            <Advantages buttonText="Удобный способ применения" droptext="Взрослые: ежедневный прием начинается с одной таблетки (0,4 мг) в день до зачатия и продолжается в течение, по крайней мере, первых 12 недель беременности.
Способ приема: внутрь. Таблетки следует проглатывать, запивая водой.
" />
        </div>
    </div>
  );
};