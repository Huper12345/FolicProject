import React from "react"
import "./Footer.scss";
import { FooterNav } from "./FooterNav";
import { LogoBorimed } from "./Logo";
import { Contacts } from "./Contacts";



export const Footer = () => {
  return (
    <section className="section section-footer">
      <div className="container">
        <div className="Footer-Inner">
            <div className="Footer-Item">
                <LogoBorimed />
                <FooterNav />
            </div>
            <div className="Footer-Item">
                <Contacts />
            </div>
        </div>
      </div>
    </section>
  );
};