import React from "react";
import "./MadeByOriall.css";

// Import project images
import hokmEgbaryImage from "../assets/images/hokmegbary 1.png";
import sinaiWorldImage from "../assets/images/sinaiworled 1.png";
import ludoImage from "../assets/images/Ludo 1.png";

const MadeByOriall = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "حكم إجباري",
      image: hokmEgbaryImage,
      description:
        "حكم إجباري هو أول بيت لبناء كرونولوجيا متكاملة وجاذبة تهدف إلى تسريع تراكمات خبرة محلية وإنتاج محتوى يتميز بزاوية نظر تمثل الهوية العربية بشكل كامل ومُرضي خاصةً مع تطبيقات الذكاء الاصطناعي التي تم تطويرها بما يتلائم معها فالمنصة مخصصة ليتفاعل بها المُهتمين لنقل المعرفة.",
      link: "#",
    },
    {
      id: 2,
      title: "موقع Sinaa World",
      image: sinaiWorldImage,
      fullTitle: "موقع Sinaa World",
      description:
        "هو موقع إلكتروني يعتبر رابط بين المستخدمين وحجز Sinaa World والخدمات والأماكن السياحية والمنتجعات سواء موقع أو تطبيق إلكتروني، بحيث يوفر الموقع كل البيانات اللازمة تجة مكانة وكيفية توصيل المستخدمين فيما بينهم ويسهل حجز الفنادل والأماكن السياحية بسهولة كاملة بحيث يسهل التخطيط للسفر والتنقل اثناء السفر و زيارة.",
      link: "#",
    },
    {
      id: 3,
      title: "لعبة Royal Ludo",
      image: ludoImage,
      fullTitle: "لعبة Royal Ludo",
      description:
        "لعبة Royal Ludo هي لعبة إلكترونية 3D مستوحاة من اللعبة التقليدية 'Ludo'، حيث يتنافس أربعة لاعبين لإيصال جميع قطعهم إلى منطقة الهدف على لوحة ثلاثية الأبعاد. يعتمد تقدم اللاعبين على رميات النرد، حيث يحاول كل لاعب تقديم قطعه بأمان واستراتيجية.",
      link: "#",
    },
  ];

  return (
    <section className="made-by-oriall-section">
      <div className="container">
        {/* Section Header */}
        <div className="made-by-oriall-header">
          <h2 className="section-title">صنع بواسطة أوريل</h2>
          <p className="section-description">
            كل مشروع نقوم به في أوريل يعكس التزامنا بالجودة والابتكار. من خلال
            فهم الإحتياج واحتياجات عملائنا، نقدم حلولاً برمجية مصممة بواسطتنا
            لتحقيق أهدافهم التقنية الفعالة وتحقيق تطلعاتهم
          </p>
        </div>

        {/* Projects Cards */}
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                {project.id === 3 ? (
                  <div className="royal-ludo-content">
                    <h3 className="project-title">لعبة Royal Ludo</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                ) : project.id === 2 ? (
                  <div className="sinaa-world-content">
                    <h3 className="project-title">موقع Sinaa World</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                ) : (
                  <>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </>
                )}
                <a href={project.link} className="read-more-link">
                  قراءة المزيد ←
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MadeByOriall;
