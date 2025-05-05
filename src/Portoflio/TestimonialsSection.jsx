import React, { useState, useEffect } from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(4);

  const testimonials = [
    {
      id: 1,
      name: "سارة محمد",
      position: "مديرة مشروع، شركة المشاريع الحديثة",
      text: "تعاملنا مع أوربل كان تجربة رائعة بكل المقاييس. الفريق احترفي في تقديم حلول مبتكرة وفريدة من نوعها. تمكنوا من فهم احتياجاتنا بشكل دقيق، وقدموا لنا نتائج فاقت توقعاتنا. نوصي بشدة بالعمل معهم لأي شركة تبحث عن التفوق والتميز.",
      initial: "س.م",
    },
    {
      id: 2,
      name: "أحمد علي",
      position: "مدير تقنية المعلومات، شركة التقنية المتقدمة",
      text: "أوربل قدمت لنا حلول برمجية متميزة ساهمت في تحسين كفاءة عملياتنا وزيادة إنتاجيتنا. فريق العمل لديهم كان دائمًا مستعدًا لتلبية احتياجاتنا وتقديم الدعم الفني اللازم. نقدر الجهود الكبيرة والاحترافية التي أظهروها في كل مرحلة من مراحل المشروع.",
      initial: "أ.ع",
    },
    {
      id: 3,
      name: "نورة العبدالله",
      position: "مديرة التسويق، شركة الإبداع",
      text: "العمل مع فريق أوربل تجربة لا تُنسى. يتميزون بالاحترافية العالية والاستجابة السريعة. قدموا لنا حلول رقمية مبتكرة ساعدت على تعزيز تواجدنا الرقمي وزيادة تفاعل العملاء. نحن ممتنون جدًا للنتائج المبهرة التي حققناها معهم.",
      initial: "ن.ع",
    },
    {
      id: 4,
      name: "محمد السالم",
      position: "المدير التنفيذي، شركة الابتكار العالمية",
      text: "شراكتنا مع أوربل كانت من أفضل القرارات التي اتخذناها. ساعدونا على تحويل أفكارنا إلى واقع ملموس من خلال حلول تقنية متطورة. الفريق محترف ويمتلك خبرة عميقة في مجال التطوير البرمجي. نتطلع لمزيد من التعاون معهم في المستقبل.",
      initial: "م.س",
    },
    {
      id: 5,
      name: "عبدالله الخالد",
      position: "مدير تطوير الأعمال، شركة التقدم",
      text: "أوربل شريك موثوق في رحلتنا الرقمية. قدموا لنا خدمات برمجية متكاملة ساهمت في تحسين أداء أعمالنا وتعزيز تجربة المستخدم. يتميز فريقهم بالمهنية العالية والالتزام بالمواعيد وجودة التنفيذ. نوصي بهم بشدة لأي مؤسسة تسعى للتميز الرقمي.",
      initial: "ع.خ",
    },
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex >= testimonials.length ? 1 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">آراء عملائنا أوربل</h2>

      <div className="testimonials-container">
        <div className="testimonial-content">
          <div className="testimonial-text-container">
            <p className="testimonial-text">
              {testimonials[activeIndex - 1].text}
            </p>
            <div className="testimonial-author">
              <h3>{testimonials[activeIndex - 1].name}</h3>
              <p>{testimonials[activeIndex - 1].position}</p>
            </div>
          </div>

          <div className="testimonial-images-row">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`testimonial-image-container ${
                  activeIndex === testimonial.id ? "active" : ""
                }`}
                onClick={() => handleDotClick(testimonial.id)}
              >
                <div className="img-placeholder">
                  <span className="client-initial">{testimonial.initial}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              className={`testimonial-dot ${
                activeIndex === testimonial.id ? "active" : ""
              }`}
              onClick={() => handleDotClick(testimonial.id)}
              aria-label={`View testimonial from ${testimonial.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
