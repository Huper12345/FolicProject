import "./Logo.css";
import LogoT from "../../../helpers/assets/Images/logo.png"

export const Logo = () => {
  return (
    <div className="Logo">
      <img src={LogoT} alt="Logo" className="Logo-Img"></img>
    </div>
  );
};
