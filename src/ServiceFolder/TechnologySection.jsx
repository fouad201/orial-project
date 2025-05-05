import React from "react";
import "./TechnologySection.css";
import simulatorImage from "../assets/images/simulator.png";
import vectorIcon from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/Vector (2).png";

const TechnologySection = () => {
  return (
    <div className="tech-section">
      <div className="tech-card">
        <div className="tech-image">
          <img src={simulatorImage} alt="Advanced Technologies" />
        </div>
        <div className="tech-content">
          <h2 className="tech-title">خدمات تطوير التقنيات المتقدمة</h2>
          <p className="tech-description">
            نختص بتطوير تقنيات الهولوجرام المتطورة وتصميم وإنشاء المحاكيات. نقدم
            حلولاً تقنية رائدة تساهم في عرض المعلومات والمنتجات بشكل ثلاثي
            الأبعاد، بالإضافة إلى توفير بيئات تدريب واقعية تحاكي البيئات
            المختلفة بدقة.
          </p>

          <div className="tech-service-buttons">
            <div className="tech-service-link">
              <span className="tech-service-text">تطوير تقنيات الهولوجرام</span>
              <img src={vectorIcon} alt="" className="tech-link-icon" />
            </div>
            <div className="tech-service-link">
              <span className="tech-service-text">تصميم وإنشاء المحاكيات</span>
              <img src={vectorIcon} alt="" className="tech-link-icon" />
            </div>
          </div>

          <div className="learn-more-wrapper">
            <button className="tech-learn-more-btn">
              <img src={arrowIcon} alt="" className="tech-button-icon" />
              لمعرفة المزيد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
