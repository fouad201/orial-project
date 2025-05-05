import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [requestType, setRequestType] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const requestTypes = [
    "طلب استشارة",
    "طلب خدمة",
    "استفسار تقني",
    "طلب تسعيرة",
    "أخرى",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRequestTypeSelect = (type) => {
    setRequestType(type);
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ ...formData, requestType });
    alert("تم إرسال طلبك بنجاح!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setRequestType("");
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-title">لنبدأ</h2>

      <form onSubmit={handleSubmit}>
        <div className="dropdown-container">
          <div
            className="dropdown-header"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span>{requestType || "نوع الطلب"}</span>
            <span className="dropdown-arrow">&#9662;</span>
          </div>

          {showDropdown && (
            <div className="dropdown-options">
              {requestTypes.map((type, index) => (
                <div
                  key={index}
                  className="dropdown-option"
                  onClick={() => handleRequestTypeSelect(type)}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="required-field">نوع الطلب مطلوب</p>

        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="الموضوع"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="رسالتك"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            إرسال
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <label className="upload-btn">
            <span>رفع ملف</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" hidden />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
