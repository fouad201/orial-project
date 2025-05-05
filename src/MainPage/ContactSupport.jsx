import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactSupport.css";
import arrowIcon from "../assets/images/Vector (2).png";
import fireIcon from "../assets/images/icon-park-solid_fire.png";

const ContactSupport = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleServicesClick = () => {
    navigate("/services");
  };

  return (
    <section className="contact-support-section">
      <div className="container">
        <div className="contact-support-content">
          <button className="know-more-btn" onClick={handleServicesClick}>
            <span>لمعرفة المزيد</span>
            <img src={arrowIcon} alt="arrow" className="arrow-icon" />
          </button>

          <div className="support-message">
            <h3 className="support-heading">
              نحاول دائما أن نكون أفضل دعم ممكن لك
            </h3>
            <p className="support-description">
              قيم عملائنا وتوفير تجربة فائقة الجودة سياستنا بمعاملاتنا
            </p>
          </div>

          <button className="contact-us-btn" onClick={handleContactClick}>
            اتصل بنا
            <img src={fireIcon} alt="fire" className="fire-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
