import React from "react";
import "./DigitalDesignSection.css";
import uxuiImage from "../assets/images/uxui.png";
import vectorIcon from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/Vector (2).png";
import ContactSupport from "../MainPage/ContactSupport";

const DigitalDesignSection = () => {
  const serviceLinks = [
    { id: 1, text: "تصميم تجربة و واجهة المستخدم" },
    { id: 2, text: "الرسوم المتحركة" },
    { id: 3, text: "تحرير الفيديو" },
  ];

  return (
    <>
      <div className="design-section">
        <div className="design-card">
          <div className="design-content">
            <h2 className="design-title">خدمات التصميم والإنتاج الرقمي</h2>
            <p className="design-description">
              نقدم خدمات تصميم وتجربة المستخدم (UX/UI)، الرسوم المتحركة (Motion
              Graphics)، وتحرير الفيديو (Video Editing). نركز على تقديم محتوى
              رقمي متميز يجمع بين الإبداع والاحترافية، لضمان إيصال الرسائل
              بفعالية تجذب انتباه الجمهور المستهدف.
            </p>

            <div className="design-service-links">
              {serviceLinks.map((link) => (
                <div key={link.id} className="design-service-link">
                  <span className="design-service-text">{link.text}</span>
                  <img src={vectorIcon} alt="" className="design-link-icon" />
                </div>
              ))}
            </div>

            <div className="learn-more-container">
              <button className="learn-more-btn">
                <img src={arrowIcon} alt="" className="button-icon" />
                لمعرفة المزيد
              </button>
            </div>
          </div>
          <div className="design-image">
            <img src={uxuiImage} alt="Digital Design Services" />
          </div>
        </div>
      </div>
      <ContactSupport />
    </>
  );
};

export default DigitalDesignSection;
