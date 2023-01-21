import "./Title.css";

export const Title = ({text, subtext}) => {
  return (
    <div className="Title-Container">
        <h2 className="Title-Text">{text}<span className="Title-Subtext"> {subtext}</span></h2>
    </div>
  );
};