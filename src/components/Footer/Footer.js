import React from "react"
import "./Footer.scss";
import { FooterNav } from "./FooterNav";



export const Footer = () => {
  return (
    <section className="section section-footer">
      <div className="container">
        <div className="Footer-Inner">
        <FooterNav />
        </div>
      </div>
    </section>
  );
};