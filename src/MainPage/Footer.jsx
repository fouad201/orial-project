import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column logo-column">
            <img
              src="/src/assets/images/logo.png"
              alt="Orial Logo"
              className="footer-logo"
            />
            <p className="company-description">
              اوريال هي شركة تطوير برمجيات رائدة تقدم حلولا مبتكرة لتحقيق نجاح
              مستدام. نحن ملتزمون بجودة عالية في جميع مشاريعنا ونسعى جاهدين
              لتقديم منتجات ممتازة.
            </p>
            <p className="company-description">
              مما يضمن رضا عملائنا. نبني أحدث التقنيات والابتكار المستمر، نطور
              حلول برمجية تلبي تطلعات عملائنا ونسهم في نجاحهم الطويل الأمد.
            </p>
          </div>

          <div className="footer-column services-column">
            <h3 className="column-title">الخدمات</h3>
            <ul className="footer-links">
              <li>
                <a href="#">خدمات تطوير البرمجيات المخصصة</a>
              </li>
              <li>
                <a href="#">خدمات تطوير تطبيقات الويب المتوافقة</a>
              </li>
              <li>
                <a href="#">تطبيقات الموبايل</a>
              </li>
              <li>
                <a href="#">خدمات تطوير الثيمات المتقدمة</a>
              </li>
              <li>
                <a href="#">خدمات التصميم والبرانديج الرقمي</a>
              </li>
            </ul>
          </div>

          <div className="footer-column company-column">
            <h3 className="column-title">الشركة</h3>
            <ul className="footer-links">
              <li>
                <a href="#">عنا</a>
              </li>
              <li>
                <a href="#">أعمالنا</a>
              </li>
              <li>
                <a href="#">الفريق</a>
              </li>
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h3 className="column-title">اتصل بنا</h3>
            <ul className="footer-links contact-links">
              <li>
                <div className="contact-item">
                  <span className="contact-icon-wrapper">
                    <img
                      src="/src/assets/images/lets-icons_message-fill.png"
                      alt="Email"
                      className="contact-icon"
                    />
                  </span>
                  <span className="contact-text">SALES@ORIAL.CO</span>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <span className="contact-icon-wrapper">
                    <img
                      src="/src/assets/images/ic_sharp-phone.png"
                      alt="Phone"
                      className="contact-icon"
                    />
                  </span>
                  <span className="contact-text">(20+)1099026602</span>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <span className="contact-icon-wrapper">
                    <img
                      src="/src/assets/images/mingcute_whatsapp-fill.png"
                      alt="WhatsApp"
                      className="contact-icon"
                    />
                  </span>
                  <span className="contact-text">(20+)10990260202</span>
                </div>
              </li>
              <li>
                <div className="contact-item address-item">
                  <span className="contact-icon-wrapper">
                    <img
                      src="/src/assets/images/typcn_location.png"
                      alt="Location"
                      className="contact-icon"
                    />
                  </span>
                  <span className="contact-text">
                    عنوان: 24 شارع 27 يوليو، المهندسين، التجمع الخامس، القاهرة،
                    مصر
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-column links-column">
            <h3 className="column-title">روابط سريعة</h3>
            <ul className="footer-links">
              <li>
                <a href="#">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="#">الردود والشروط</a>
              </li>
              <li>
                <a href="#">اتصل بنا</a>
              </li>
              <li>
                <a href="#">قائمة</a>
              </li>
            </ul>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <img
                  src="/src/assets/images/ant-design_instagram-filled.png"
                  alt="Instagram"
                />
              </a>
              <a href="#" className="social-icon">
                <img
                  src="/src/assets/images/eva_linkedin-fill.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="#" className="social-icon">
                <img
                  src="/src/assets/images/mingcute_facebook-fill.png"
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          حقوق النشر © Orial 2025 كل الحقوق محفوظة.
        </div>
        <a href="#" className="language-link">
          <img
            src="/src/assets/images/worldicon.png"
            alt="Language"
            className="world-icon"
          />
          English
        </a>
      </div>
    </footer>
  );
};

export default Footer;
