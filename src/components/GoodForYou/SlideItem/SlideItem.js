import "./SlideItem.css";


export const SlideItem = ({title, src, subtext }) => {
  return (
      <div className="SlideItem-Box">
        <h3 className="SlideItem-Title">{title}</h3>
        <img src={src} alt="" className="SlideItem-IMG"></img>
        <div className="SlideItem-Subtext">{subtext}</div>
      </div>
  );
};