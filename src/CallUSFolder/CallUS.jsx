import React from "react";
import "./CallUS.css";
import ContactForm from "./ContactForm";
import emailIcon from "../assets/images/lets-icons_message-fill.png";
import phoneIcon from "../assets/images/ic_sharp-phone.png";
import locationIcon from "../assets/images/typcn_location.png";
import whatsappIcon from "../assets/images/mingcute_whatsapp-fill.png";
import facebookIcon from "../assets/images/mingcute_facebook-fill.png";
import instagramIcon from "../assets/images/ant-design_instagram-filled.png";
import linkedinIcon from "../assets/images/eva_linkedin-fill.png";

const CallUS = () => {
  return (
    <div className="callus-container">
      <div className="callus-overlay">
        <div className="callus-content">
          <div className="callus-sections">
            <div className="contact-info-section">
              <h2 className="callus-title">
                نحن هنا لمساعدتك في كل خطوة، تواصل معنا الآن!
              </h2>

              <div className="callus-cards-container">
                {/* Email Card */}
                <div className="callus-card">
                  <div className="callus-card-icon">
                    <img src={emailIcon} alt="Email" />
                  </div>
                  <h3>البريد الإلكتروني</h3>
                  <p>info@oriall.com</p>
                  <p>support@oriall.com</p>
                </div>

                {/* Phone Card */}
                <div className="callus-card">
                  <div className="callus-card-icon">
                    <img src={phoneIcon} alt="Phone" />
                  </div>
                  <h3>اتصل بنا</h3>
                  <p>+20 123 456 7890</p>
                  <p>+20 098 765 4321</p>
                </div>

                {/* Location Card */}
                <div className="callus-card">
                  <div className="callus-card-icon">
                    <img src={locationIcon} alt="Location" />
                  </div>
                  <h3>موقعنا</h3>
                  <p>القاهرة، مصر</p>
                  <p>شارع الهرم، الجيزة</p>
                </div>

                {/* Social Media Card */}
                <div className="callus-card">
                  <div className="callus-card-icon social-icons">
                    <a
                      href="https://www.facebook.com/oriall"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a
                      href="https://www.instagram.com/oriall"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/oriall"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a
                      href="https://wa.me/201234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                  </div>
                  <h3>وسائل التواصل الاجتماعي</h3>
                  <p>تابعنا للحصول على آخر الأخبار</p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUS;
