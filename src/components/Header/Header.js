import "./Header.scss";
import "./Logo"
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className="Header">
      <header className="Header__inner">
      <Logo />
      <Nav />
      </header>
    </div>
  );
};
