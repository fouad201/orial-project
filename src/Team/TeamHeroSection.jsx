import React from "react";
import "./TeamHeroSection.css";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../assets/images/Vector (2).png";

const TeamHeroSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="team-hero-section">
      <div className="team-hero">
        <div className="team-overlay">
          <h1 className="hero-title">
            فريقنا المبدع يجمع بين الخبرة والشغف لتحقيق رؤيتك
          </h1>
          <button
            className="learn-more-btn"
            onClick={() => handleNavigation("/contact")}
          >
            تواصل معنا
            <img src={arrowIcon} alt="" className="button-icon" />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="team-intro-content">
          <div className="content-text">
            <h2 className="section-title">فريق من الخبراء المتخصصين</h2>
            <p className="content-description">
              فريقنا هو أساس نجاحنا. نضم نخبة من الخبراء المتخصصين في مجالات
              البرمجة والتصميم وتطوير التطبيقات وإدارة المشاريع. يتميز فريقنا
              بالشغف والإبداع والالتزام بتقديم أعلى معايير الجودة في كل مشروع.
              نحن نؤمن بقوة العمل الجماعي والابتكار المستمر لتقديم حلول تقنية
              متطورة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
            </p>
            <p className="content-description">
              يمتلك كل عضو في الفريق خبرة واسعة في مجال تخصصه، مع التزام مشترك
              بالتعلم المستمر ومواكبة أحدث التقنيات والمنهجيات في عالم
              التكنولوجيا. نحن نعمل معًا كوحدة متكاملة لتحويل الأفكار إلى واقع
              ملموس وإنشاء منتجات رقمية استثنائية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeroSection;
