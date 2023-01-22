import "./TextButton.css";

export const TextButton = ({text, href, target}) => {
  return (
    <div className="TextButton-Box">
        <a href={href} target={target} className="TextButton">{text}
        </a>
    </div>
  );
};