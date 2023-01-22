import "./Title.css";

export const Title = ({text, subtext, href}) => {
  return (
    <div className="Title-Container">
        <h2 className="Title-Text">{text}<a href={href} target="blank" className="Title-Subtext"> {subtext}</a></h2>
    </div>
  );
};