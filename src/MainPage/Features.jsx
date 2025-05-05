import React from "react";
import "./Features.css";

// Import images
import teamIcon from "../assets/images/fa6-solid_users.png";
import solutionsIcon from "../assets/images/Group.png";
import techIcon from "../assets/images/mingcute_pen-fill.png";
import supportIcon from "../assets/images/solar_hand-money-bold.png";
import consultIcon from "../assets/images/Vector (3).png";
import featuresIcon from "../assets/images/Vector (4).png";
import lightbulbImage from "../assets/images/about 1.png";

const Features = () => {
  // Features data
  const featureCards = [
    {
      id: 1,
      icon: techIcon,
      title: "تقنيات حديثة",
      description:
        "نستخدم أحدث التقنيات المتطورة في التصميم لضمان تطوير حلول ذكية وفعالة ذات جودة عالية",
    },
    {
      id: 2,
      icon: solutionsIcon,
      title: "حلول متكاملة",
      description:
        "نقدم حلول برمجية متكاملة مصممة خصيصًا لاحتياجات العميل وتحقيق أهدافه بفاعلية",
    },
    {
      id: 3,
      icon: teamIcon,
      title: "فريق متخصص",
      description:
        "فريقنا يتكون من خبراء متمرسين في مجالاتهم المختلفة، مكرسين أنفسهم لتحقيق أفضل النتائج",
    },
    {
      id: 4,
      icon: supportIcon,
      title: "تكلفة منافسة",
      description:
        "نقدم خدماتنا بجودة عالية وأسعار منافسة للشركات مع دعم الميزانية والمتطلبات",
    },
    {
      id: 5,
      icon: consultIcon,
      title: "دعم مستمر",
      description:
        "نقدم دعمًا مستمرًا وإدارة استباقية للمشاريع، وإستشارة فنية من خبرائنا",
    },
    {
      id: 6,
      icon: featuresIcon,
      title: "تصميمات متميزة",
      description:
        "نقدم تصميمات مبتكرة ومميزة تجمع بين الجمال والوظائف المناسبة لضمان أفضل التفاصيل",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        {/* Header with Lightbulb Image and Text */}
        <div className="features-header">
          <div className="header-content">
            <h2 className="main-title">
              تعرف على رحلتنا نحو الابتكار والتميز في عالم البرمجيات
            </h2>
            <p className="main-description">
              أوريل هي شركة رائدة ومتخصصة في مجال تطوير البرمجيات, تأسست في عام
              2019 بهدف تقديم حلول تقنية مبتكرة تسهم في تشكيل مستقبل أفضل وأكثر
              شراقا . نحن في أوريل نؤمن بأن الجمع بين الأبداع والتكنولوجيا يمكن
              ان يحقق إنجازات ملموسة وملهمة . نسعى دايما لتحويل الأفكار المبتكرة
              الى واقع ملموس من خلال تطبيق أحدث التقنيات والحلول البرمجية .
              <br />
              <br />
              فريقنا المتفاني , الذي يضم نخبة من الخبراء والمهندسين المتختصصين ,
              يعمل باستمرار على تطوير منتجات وخدمات برمجية عالية الجودة تتجاوز
              توقعات عملائنا . نحن ملتزمون بتقديم تجارب استثنائية تلبي احتياجات
              العملاء المتنوعية , من خلال نهج شامل يركز على الابتكار , والجودة ,
              والتميز في كل مانقدمه .
            </p>
          </div>
          <div className="lightbulb-image">
            <img src={lightbulbImage} alt="Innovation" />
          </div>
        </div>

        {/* Features Headline */}
        <div className="features-headline">
          <h2 className="section-title">
            نقدم لك مميزات تجعله الاختيار الأمثل لنجاحك
          </h2>
          <p className="subtitle">
            نحن لسنا مجموعة من خبرات، بل نحن شراكة، انطلاق، العمل، الإبداع،
            وخطتك نحو نجاح.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="feature-cards">
          {featureCards.map((card) => (
            <div key={card.id} className="feature-card">
              <div className="icon-container">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="feature-icon"
                />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
