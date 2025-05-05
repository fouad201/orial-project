import React from "react";
import "./VRARSection.css";
import vrImage from "../assets/images/Vr.png";
import vectorIcon from "../assets/images/Vector.png";
import arrowIcon from "../assets/images/Vector (2).png";

const VRARSection = () => {
  return (
    <section className="vrar-section">
      <div className="vrar-container">
        <div className="vrar-content-wrapper">
          <div className="vrar-image-container">
            <img src={vrImage} alt="VR/AR Development" className="vrar-img" />
          </div>

          <div className="vrar-text-content">
            <h2 className="vrar-title">
              خدمات تطوير تطبيقات الواقع الافتراضي والمعزز
            </h2>
            <p className="vrar-description">
              نقدم أحدث التقنيات في مجال الواقع الافتراضي (VR) والواقع المعزز
              (AR) لإنشاء تجارب تفاعلية غامرة. نستخدم هذه التقنيات لدعم
              الميتافيرس، مما يمكننا من تقديم حلول مبتكرة في مجالات الطب،
              الصناعة، الهندسة، والتعليم. VR وAR يسمحان للأطباء بمحاكاة العمليات
              الجراحية، والمهندسين بتصميم نماذج أولية افتراضية، والمعلمين بإنشاء
              بيئات تعليمية تفاعلية. نحن ملتزمون بتحسين جودة الحياة وتعزيز
              الكفاءة عبر توفير حلول تقنية متقدمة تلبي احتياجات عملائنا وتفوق
              توقعاتهم. تواصل معنا لتكتشف كيف يمكن لتقنياتنا أن تحدث فرقًا
              حقيقيًا.
            </p>

            <div className="vrar-buttons">
              <div className="vrar-service-link">
                <span className="vrar-service-text">
                  تطوير تطبيقات الواقع الافتراضي
                </span>
                <img src={vectorIcon} alt="" className="vrar-link-icon" />
              </div>
              <div className="vrar-service-link">
                <span className="vrar-service-text">
                  تطوير تطبيقات الواقع المعزز
                </span>
                <img src={vectorIcon} alt="" className="vrar-link-icon" />
              </div>
            </div>

            <button className="vrar-learn-more-btn">
              لمعرفة المزيد
              <img src={arrowIcon} alt="" className="vrar-button-icon" />{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VRARSection;
