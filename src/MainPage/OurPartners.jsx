import React from "react";
import "./OurPartners.css";

// Import partner logos
import alahlyLogo from "../assets/images/alahly.png";
import azoozLogo from "../assets/images/azooz.png";
import armyLogo from "../assets/images/army.png";
import hedayaLogo from "../assets/images/hedaya.png";
import etqaanLogo from "../assets/images/etqaan.png";
import laststepLogo from "../assets/images/laststep.png";
import vissionLogo from "../assets/images/vissionsoft.png";
import mara3iLogo from "../assets/images/mara3i.png";
import pepsiLogo from "../assets/images/pepsi.png";

const OurPartners = () => {
  // Partner data organized in rows
  const partnersFirstRow = [
    { id: 1, name: "Alahly Bank", logo: alahlyLogo },
    { id: 2, name: "Azooz", logo: azoozLogo },
    { id: 3, name: "Army", logo: armyLogo },
    { id: 4, name: "Hedaya", logo: hedayaLogo },
    { id: 5, name: "Etqaan", logo: etqaanLogo },
  ];

  const partnersSecondRow = [
    { id: 6, name: "Last Step", logo: laststepLogo },
    { id: 7, name: "Vission Soft", logo: vissionLogo },
    { id: 8, name: "Almara3i", logo: mara3iLogo },
    { id: 9, name: "Pepsi", logo: pepsiLogo },
  ];

  return (
    <section className="partners-section">
      <div className="container">
        {/* Section Header */}
        <div className="partners-header">
          <h2 className="section-title">شركاؤنا</h2>
          <p className="section-description">
            نحن فخورون بالعمل مع شركاء موثوقين في مختلف القطاعات، ونلتزم بتقديم
            المشاريع بما يتناسب مع متطلباتهم
          </p>
        </div>

        {/* Partners Logos - First Row */}
        <div className="partners-logos-row">
          {partnersFirstRow.map((partner) => (
            <div key={partner.id} className="partner-logo-container">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>

        {/* Partners Logos - Second Row */}
        <div className="partners-logos-row">
          {partnersSecondRow.map((partner) => (
            <div key={partner.id} className="partner-logo-container">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
