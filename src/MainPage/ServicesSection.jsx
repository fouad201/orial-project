import React from "react";
import "./ServicesSection.css";

// Import images for service cards
import designIcon from "../assets/images/mingcute_pen-fill.png";
import webIcon from "../assets/images/cib_codewars.png";
import arVrIcon from "../assets/images/Vector (1).png";
import appIcon from "../assets/images/Group 1.png";
import developmentImage from "../assets/images/development 1.png";
import vectorIcon from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/Vector (2).png";

const ServicesSection = () => {
  // Service card data
  const serviceCards = [
    {
      id: 1,
      icon: designIcon,
      title: "خدمات التصميم والإنتاج الرقمى",
      description: "تصميم واجهات، رسوم متحركة، وإنتاج فيديو",
    },
    {
      id: 2,
      icon: webIcon,
      title: "خدمات تطوير التقنيات المتقدمة",
      description:
        "تطوير حلول تقنية قابلة للتطوير والتحديث لتحسين التفاعل والتدريب",
    },
    {
      id: 3,
      icon: arVrIcon,
      title: "خدمات تطوير تطبيقات الواقع الافتراضي والمعزز",
      description:
        "إنشاء تجارب تفاعلية مميزة عبر تقنيات الواقع الافتراضي والمعزز",
    },
    {
      id: 4,
      icon: appIcon,
      title: "خدمات تطوير البرمجيات المخصصة",
      description:
        "تطوير برمجيات مخصصة للشركات الناشئة والكبيرة وتحسين تجربة المستخدم",
    },
  ];

  // Service links
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
    <section className="services-main-section">
      <div className="services-container">
        {/* Service Cards */}
        <div className="services-cards-wrapper">
          <div className="services-cards-grid">
            {serviceCards.map((card) => (
              <div key={card.id} className="services-card-item">
                <div className="services-icon-container">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="services-icon-image"
                  />
                </div>
                <h3 className="services-card-title">{card.title}</h3>
                <p className="services-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Services Content */}
        <div className="services-content-box">
          <div className="services-content-text">
            <h2 className="services-section-title">
              خدمات تطوير البرمجيات المخصصة
            </h2>
            <p className="services-content-desc">
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
          <div className="services-content-image-box">
            <img
              src={developmentImage}
              alt="Software Development"
              className="services-content-img"
            />
          </div>
        </div>

        {/* Service Links */}
        <div className="services-links-grid">
          {serviceLinks.map((link) => (
            <div key={link.id} className="services-link-item">
              <span className="services-link-text">{link.title}</span>
              <img src={vectorIcon} alt="" className="services-link-icon" />
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="services-learn-more-container">
          <button className="services-learn-more-btn">
            لمعرفة المزيد
            <img src={arrowIcon} alt="" className="services-button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
