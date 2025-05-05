import React from "react";
import "./CustomSoftwareSection.css";

const CustomSoftwareSection = () => {
  return (
    <section className="custom-software-section">
      <div className="custom-software-header">
        <h3>خدمات تطوير البرمجيات المخصصة</h3>
        <p className="subtitle">خدمات تطوير البرمجيات المخصصة</p>
        <p className="description">
          نقدم في أوريال خدمات تطوير البرمجيات المتكاملة التي تشمل تطوير تطبيقات
          الهاتف المحمول، المواقع الإلكترونية، أنظمة الأعمال، وتطوير الألعاب
          الإلكترونية. نعمل على تحويل الأفكار إلى حلول تقنية مبتكرة تساهم في
          تعزيز الكفاءة وتحسين تجربة المستخدم، مع التركيز على الجودة والأداء.
          نسعى لتقديم حلول برمجية تلبي احتياجات عملائنا وتفوق توقعاتهم.
        </p>
        <p className="description">
          بعض من أعمالنا تشمل تطوير تطبيقات مبتكرة، إنشاء مواقع تفاعلية، تصميم
          أنظمة أعمال متقدمة، وتطوير ألعاب إلكترونية ممتعة.
        </p>
      </div>
      <div className="custom-software-grid">
        <div className="custom-software-card">
          <div className="img-placeholder">
            <span className="app-icon">كابتن</span>
          </div>
          <h4>كابتن عزوز</h4>
          <p>
            تطبيق عزوز هو تطبيق شامل يقدم مجموعة متنوعة من خدمات التوصيل، بما في
            ذلك نقل الركاب، طلبات المطاعم، السوبر ماركت، وتوصيل البطاقات الخاصة.
            من خلال هذه المنصة الواحدة، يمكن للمستخدمين الوصول إلى جميع
            احتياجاتهم اليومية بسهولة ويسر.
          </p>
        </div>
        <div className="custom-software-card">
          <div className="img-placeholder">
            <span className="app-icon">هداية</span>
          </div>
          <h4>منصة هداية التعليمية</h4>
          <p>
            منصة هداية التعليمية الإسلامية هي منصة إلكترونية متكاملة تهدف إلى
            تقديم مجموعة من البرامج والدورات التعليمية. تسعى المنصة إلى توظيف
            الإمكانيات التكنولوجية والمعايير الحديثة لبناء معرفة آمنة، تتيح
            للمسلمين وأبنائهم التعلم وفهم الإسلام الصحيح؛ بأسلوب المنصة في.
          </p>
        </div>
        <div className="custom-software-card">
          <div className="img-placeholder">
            <span className="app-icon">HAAT</span>
          </div>
          <h4>هات</h4>
          <p>تطبيق هات (HAAT) هو تطبيق يهدف إلى توفير خدمات توصيل شاملة</p>
        </div>
        <div className="custom-software-card">
          <div className="img-placeholder">
            <span className="app-icon">كارد</span>
          </div>
          <h4>تطبيق هات كارد</h4>
          <p>تطبيق هات كارد هو تطبيق شامل لخدمات البطاقات الإلكترونية</p>
        </div>
        <div className="custom-software-card">
          <div className="img-placeholder">
            <span className="app-icon">أذكار</span>
          </div>
          <h4>أذكار</h4>
          <p>
            تطبيق الأذكار هو تطبيق سهل الاستخدام، مصمم لتقديم أذكار الصباح
            والمساء وغيرها.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareSection;
