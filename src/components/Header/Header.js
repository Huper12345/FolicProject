import React from "react"
import "./Header.scss";
import "../../pages/Home/Home.scss"
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useState } from "react";

export const Header = () => {
  
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `Header ${sticky}`;
  
  return (
    <div className={classes}>
      <div className="container">
        <header className="Header__inner">
            <Logo />
            <Nav />
          </header>
        </div>
    </div>
  );
};
