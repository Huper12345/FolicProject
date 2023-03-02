import React from "react";
import "./Contacts.css";
import { TextButton } from "../../../helpers/TextButton";

export const Contacts = () => {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "открытое акционерное общество «Борисовский завод медицинских препаратов»",
    address: "Республика Беларусь, г. Борисов, ул. Чапаева, 64",
    telephone: "+375(177) 76 71 96",
    zipcode: "222518",
  };

  return (
    <div className="Contacts-Container" id="Contacts">
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      <h2 className="Contacts-Title">
        Производитель - {articleStructuredData.name} ,
        {articleStructuredData.address}, {articleStructuredData.zipcode},{" "}
        {articleStructuredData.telephone}
      </h2>
      <h3 className="Contacts-Subtext">
        ЛЕКАРСТВЕННЫЙ ПРЕПАРАТ. ПЕРЕД ПРИМЕНЕНИЕМ ОЗНАКОМЬТЕСЬ С ИНСТРУКЦИЕЙ И
        ПРОКОНСУЛЬТИРУЙТЕСЬ С ВРАЧОМ
      </h3>

      <a
        href="https://www.rceth.by/NDfiles/instr/23_01_3103_s.pdf"
        target="blank"
        className="TextButton Footer"
      >
        Открыть инструкцию
      </a>
    </div>
  );
};
