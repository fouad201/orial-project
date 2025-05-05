import React, { useState } from "react";
import "./FAQ.css";
import questionImage from "../assets/images/quations.png";

const FAQ = () => {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(0);
  // Optional: Add animation state for smoother transitions
  const [animating, setAnimating] = useState(false);

  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: "ما هي خدمات أوريل الرئيسية؟",
      answer:
        "نقدم خدمات تطوير مواقع الويب، تطبيقات الهواتف المحمولة، أنظمة إدارة الأعمال، وأنظمة الواقع الافتراضي والمعزز.",
    },
    {
      id: 2,
      question: "ما الذي يميز أوريل عن الشركات الأخرى؟",
      answer:
        "تتميز أوريل بفريق من الخبراء المتخصصين، ونهج شامل يركز على الابتكار والجودة، وتقديم حلول مخصصة تلبي احتياجات العملاء، بالإضافة إلى التزامنا بأحدث التقنيات والمعايير العالمية.",
    },
    {
      id: 3,
      question: "كيف يمكنني التواصل مع أوريل؟",
      answer:
        "يمكنكم التواصل معنا من خلال الاتصال المباشر، إرسال بريد إلكتروني، أو ملء نموذج التواصل على موقعنا الإلكتروني، أو زيارة مقر الشركة خلال ساعات العمل الرسمية.",
    },
    {
      id: 4,
      question: "هل تقدمون خدمات مخصصة؟",
      answer:
        "نعم، نقدم حلولًا مخصصة تمامًا حسب احتياجات كل عميل. نحن نعمل عن كثب مع عملائنا لفهم متطلباتهم وتطوير حلول تلبي أهدافهم التجارية بشكل فعال.",
    },
    {
      id: 5,
      question: "كيف تضمنون جودة الخدمات التي تقدمونها؟",
      answer:
        "نضمن جودة خدماتنا من خلال اتباع منهجية تطوير صارمة، وإجراء اختبارات شاملة، والعمل مع فريق من المحترفين ذوي الخبرة العالية. كما نلتزم بمعايير الجودة العالمية ونقدم دعمًا مستمرًا بعد إطلاق المشروع.",
    },
  ];

  // Enhanced toggle function for accordion
  const toggleAccordion = (index) => {
    // Set animating state to true
    setAnimating(true);

    // Toggle the open index
    setOpenIndex(openIndex === index ? -1 : index);

    // Reset animating state after animation completes
    setTimeout(() => {
      setAnimating(false);
    }, 400); // Match this with the CSS transition time
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">الابتكار والإبداع في كل ما نقدمه</h2>
        </div>

        <div className="faq-content">
          {/* Image container now comes first */}
          <div className="faq-image-container">
            <img src={questionImage} alt="أسئلة شائعة" className="faq-image" />
          </div>

          {/* FAQ list now comes second */}
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className={`faq-item ${openIndex === index ? "open" : ""} ${
                  animating ? "animating" : ""
                }`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <div className="faq-icon">
                    <span className="icon-symbol">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
