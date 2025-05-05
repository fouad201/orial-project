import React from "react";
import "./AboutUs.css";
import backgroundImage from "../assets/images/images.jpg";
import aboutImage from "../assets/images/about 1.png";
import FAQ from "./FAQ";
import VideoStats from "./VideoStats";
import ContactSupport from "../MainPage/ContactSupport";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero section with background image */}
      <div
        className="about-us-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="about-us-content">
          <h1 className="about-us-title">مرحبًا بكم في عالم أوريل</h1>
          <div className="contact-button-container">
            <button className="contact-button">تواصل معنا</button>
          </div>
        </div>
      </div>

      {/* About section with the company information */}
      <div className="about-content-section">
        <div className="about-content-container">
          <div className="about-text-container">
            <h2 className="about-title">لتطوير عملك إلى آفاق جديدة</h2>
            <h3 className="about-subtitle">الابتكار والإبداع في كل ما نقدمه</h3>
            <p className="about-description">
              أوريل هي شركة رائدة ومتخصصة في مجال تطوير البرمجيات، تأسست في عام
              2019 بهدف تقديم حلول تقنية مبتكرة تسهم في تشكيل مستقبل أفضل وأكثر
              إشراقًا. نحن في أوريل نؤمن بأن الجمع بين الإبداع والتكنولوجيا يمكن
              أن يحقق إنجازات ملموسة وملهمة. نسعى دائمًا لتحويل الأفكار المبتكرة
              إلى واقع ملموس من خلال تطبيق أحدث التقنيات والحلول البرمجية.
            </p>
            <p className="about-description">
              فريقنا الاحترافي، الذي يضم نخبة من الخبراء والمهندسين المتخصصين،
              يعمل باستمرار على تطوير منتجات وخدمات برمجية عالية الجودة تتجاوز
              توقعات عملائنا. نحن ملتزمون بتقديم تجارب استثنائية تلبي احتياجات
              العملاء المتنوعة، من خلال نهج شامل يركز على الابتكار والجودة،
              والتميز في كل ما نقدمه.
            </p>
            <p className="about-description">
              في أوريل، نهدف إلى تحقيق رؤيتنا في أن تكون شريكَكم المثالي في
              النجاح والتطوير، من خلال توفير حلول تقنية تسهم في تحقيق أهدافكم
              وطموحاتكم، وتجعل من المستقبل واقعًا أكثر تطورًا وإشراقًا.
            </p>
          </div>
          <div className="about-image-container">
            <img src={aboutImage} alt="أوريل للتطوير" className="about-image" />
          </div>
        </div>
      </div>

      {/* FAQ Section - Now comes first */}
      <FAQ />

      {/* Video and Stats Section - Now comes second */}
      <VideoStats />

      {/* Contact Support Section */}
      <ContactSupport />
    </div>
  );
};

export default AboutUs;
