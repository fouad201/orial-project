import React from "react";
import "./FirstSection.css";
import { useNavigate } from "react-router-dom";
import developmentImage from "../assets/images/development 1.png";
import vectorIcon from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/Vector (2).png";

const FirstSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Service links data
  const serviceLinks = [
    {
      id: 1,
      title: "تطوير تطبيقات الهاتف المحمول",
    },
    {
      id: 2,
      title: "تطوير أنظمة إدارة الأعمال المتقدمة",
    },
    {
      id: 3,
      title: "تطوير وتصميم المواقع الإلكترونية",
    },
    {
      id: 4,
      title: "تطوير وتصميم الألعاب الإلكترونية",
    },
  ];

  return (
    <div className="service-section">
      <div className="service-hero">
        <div className="service-overlay">
          <h1 className="hero-title">
            استكشف حلولنا البرمجية المتكاملة لتحقيق النجاح والتميز.
          </h1>
          <button
            className="learn-more-btn"
            onClick={() => handleNavigation("/")}
          >
            لمعرفة المزيد
            <img src={arrowIcon} alt="" className="button-icon" />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="services-content">
          <div className="content-text">
            <h2 className="section-title">خدمات تطوير البرمجيات المخصصة</h2>
            <p className="content-description">
              نقدم في أوريال خدمات تطوير البرمجيات المتكاملة التي تشمل تطوير
              تطبيقات الهاتف المحمول ، المواقع الإلكترونية ، أنظمة الأعمال ،
              وتطوير الألعاب الإلكترونية . نعمل على تحويل الأفكار إلى حلول تقنية
              مبتكرة تسهم في تعزيز الكفاءة وتحسين تجربة المستخدم ، مع التركيز
              على الجودة والأداء. نسعى لتقديم حلول برمجية تلبي احتياجات عملائنا
              وتفوق توقعاتهم. بعض من أعمالنا تشمل تطوير تطبيقات مبتكرة ، إنشاء
              مواقع تفاعلية ، تصميم أنظمة أعمال متقدمة وتطوير ألعاب إلكترونية
              متقنة .
            </p>
          </div>
          <div className="content-image">
            <img src={developmentImage} alt="Software Development" />
          </div>
        </div>

        {/* Service Links */}
        <div className="service-links">
          {serviceLinks.map((link) => (
            <div key={link.id} className="service-link">
              <span>{link.title}</span>
              <img src={vectorIcon} alt="" className="link-icon" />
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="learn-more-container">
          <button
            className="learn-more-btn"
            onClick={() => handleNavigation("/")}
          >
            لمعرفة المزيد
            <img src={arrowIcon} alt="" className="button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
