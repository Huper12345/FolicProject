import "./TextButton.css";

export const TextButton = ({text, href}) => {
  return (
    <div className="TextButton-Box">
        <a href={href} className="TextButton">{text}
        </a>
    </div>
  );
};