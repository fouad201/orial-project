import React from "react";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div>
      <div className="portfolio-hero">
        <div className="hero-content">
          <h1 className="hero-title">اكتشف أعمالنا المتميزة</h1>
          <button className="contact-button">
            <span>تواصل معنا🔥</span>
          </button>
        </div>
      </div>

      <div className="services-menu">
        <div className="service-item dropdown">
          <a href="#">خدمات التصميم والإنتاج الرقمي</a>
          <div className="dropdown-menu no-arrows">
            <a href="#">الرسوم المتحركة</a>
            <a href="#">تحرير الفيديو</a>
            <a href="#">تصميم تجربة و واجهة المستخدم</a>
          </div>
        </div>
        <div className="service-divider"></div>
        <div className="service-item dropdown">
          <a href="#">خدمات تطوير التقنيات المتقدمة</a>
          <div className="dropdown-menu no-arrows">
            <a href="#">تطوير تقنيات الهولوجرام</a>
            <a href="#">تصميم وإنشاء المحاكيات</a>
          </div>
        </div>
        <div className="service-divider"></div>
        <div className="service-item dropdown">
          <a href="#">خدمات تطوير تطبيقات الواقع الافتراضي والمعزز</a>
          <div className="dropdown-menu no-arrows">
            <a href="#">تطوير تطبيقات الواقع الافتراضي</a>
            <a href="#">تطوير تطبيقات الواقع المعزز</a>
          </div>
        </div>
        <div className="service-divider"></div>
        <div className="service-item active dropdown">
          <a href="#">خدمات تطوير البرمجيات المخصصة</a>
          <div className="dropdown-menu no-arrows">
            <a href="#">تطوير تطبيقات الهاتف المحمول</a>
            <a href="#">تطوير وتصميم المواقع الإلكترونية</a>
            <a href="#">تطوير أنظمة إدارة الأعمال المتقدمة</a>
            <a href="#">تطوير وتصميم الألعاب الإلكترونية</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
