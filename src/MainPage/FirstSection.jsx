import React from "react";
import { useNavigate } from "react-router-dom";
import coverImage from "../assets/images/ORIAL COVER.png";
import "./FirstSection.css";

const FirstSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="first-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="floating-element circle-1"></div>
          <div className="floating-element circle-2"></div>
          <div className="floating-element circle-3"></div>

          <div className="left-column">
            <div className="text-content">
              <h1 className="main-heading">
                نبتكر المستقبل اليوم لتحويل الأفكار إلى واقع ملموس
              </h1>

              <p className="description">
                مرحباً بكم في أوريال، الشركة الرائدة في مزج الإبداع مع
                التكنولوجيا المتقدمة لتحقيق حلول برمجية متميزة تشكل ملامح مستقبل
                مشرق وأكثر تطوراً. نسعى جاهدين لتقديم حلول مبتكرة تلبي كافة
                تطلعاتكم وتحقق لكم التفوق في عالم يتطور باستمرار.
              </p>

              <button className="contact-button" onClick={handleContactClick}>
                تحدث إلينا 🔥
              </button>
            </div>
          </div>

          <div className="right-column">
            <div className="image-wrapper">
              <img
                src={coverImage}
                alt="ORIAL Innovative"
                className="cover-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
