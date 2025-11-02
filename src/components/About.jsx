// src/components/AboutUs.jsx
import React from "react";
import aboutImg from "../images/about.png"; // replace with your actual image

const AboutUs = () => {
  return (
    <section className="about-us py-5 bg-light" id="about" dir="rtl">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3 display-5 text-end">
              حول <span style={{ color: "#E47945" }}>إطارات سبيد سيل</span>
            </h2>
            <p className="text-muted fs-5 mb-4 text-end">
              تأسست شركة دبل ستار عام 1921 ويقع مقرها الرئيسي في مدينة تشينغداو، وهي الشركة الوحيدة المدرجة المملوكة للدولة في مقاطعة شاندونغ (رمز السهم 000599). 
              بعد أن تحولت بالكامل إلى تصنيع الإطارات في عام 2008، قامت الشركة بإنشاء أول مصنع ذكي للإطارات في العالم وفق مفهوم الصناعة 4.0، 
              كما توسعت في مجال المعدات الذكية والمواد البيئية الخضراء. 
              تُعد دبل ستار رائدة في التصنيع الذكي والصديق للبيئة، وأصبحت المساهم الرئيسي في شركة كومهو للإطارات الكورية عام 2018. 
              واليوم، تعمل الشركة على بناء مؤسسة عالمية المستوى تركز على الابتكار، الاستدامة، والتنافسية العالمية.
            </p>

            <ul className="list-unstyled text-muted mb-4 fs-5 text-end">
              <li>✔ تكنولوجيا الإغلاق الذاتي المتقدمة</li>
              <li>✔ أداء وسلامة فائقة</li>
              <li>✔ راحة في جميع المواسم</li>
            </ul>

            <div className="text-end">
              <a href="https://www.doublestartyre.com/"
                target="_blank"
                className="btn text-white fw-semibold px-5 py-3 rounded-pill shadow"
                style={{ backgroundColor: "#E47945", fontSize: "1.1rem" }}
              >
                اعرف المزيد
              </a>
            </div>  

           
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={"https://i.postimg.cc/yxwMBLVj/dubble-star.jpg"}
              alt="حول إطارات هيدواي"
              className="img-fluid rounded-4 shadow-lg"
              style={{ transition: "0.3s ease-in-out" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          <img
            src="https://omo-oss-image.thefastimg.com/portal-saas/new2023033117531076223/cms/image/fbc2a58b-a1cd-4dfe-80dd-753022811e95.jpg"
            alt=""
            className="my-5"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
