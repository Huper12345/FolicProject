import React from "react"
import "./Header.scss";
import "../../pages/Home/Home.scss"
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <header className="Header__inner">
            <Logo />
            <Nav />
          </header>
        </div>
    </div>
  );
};
