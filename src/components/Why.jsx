import React from "react";
import { ShieldCheck, DollarSign, TrendingUp, Car } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck style={{ color: "#E47945" }} />,
    title: "تقنية الإغلاق الذاتي",
    desc: "تقوم بسد الثقوب تلقائيًا لتبقيك مستمرًا دون توقف.",
  },
  {
    icon: <Car style={{ color: "#E47945" }} />,
    title: "أقصى درجات الأمان",
    desc: "مصممة لتقليل مخاطر انفجار الإطارات ومنحك راحة البال أثناء القيادة.",
  },
  {
    icon: <DollarSign style={{ color: "#E47945" }} />,
    title: "توفير التكاليف",
    desc: "وفّر المال بتجنب تغيير الإطارات المتكرر ومشاكل الطريق المفاجئة.",
  },
  {
    icon: <TrendingUp style={{ color: "#E47945" }} />,
    title: "مصانع هيدواي",
    desc: "إطارات مصممة بدقة لضمان الثبات والراحة والأداء الممتاز على جميع الطرق.",
  },
];

const Why = () => {
  return (
    <section className="why py-5 bg-light" id="why" dir="rtl">
      <div className="container">
        <div className="row align-items-center text-end">
          
          {/* النص والخصائص */}
            <h2 className="fw-bold text-center my-5">
              لماذا تختار <span style={{ color: "#E47945" }}>إطارات سبيد سيل</span>؟
            </h2>
          <div className="col-md-6 mb-4 mb-md-0" dir="rtl">

            <div className="d-flex flex-column align-items-right justify-content-right gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="d-flex align-items-start ">
                   <div
                    className="ms-3 p-2 rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#E4794520",
                    }}
                  >
                    {reason.icon}
                  </div>
                  <div>
                    <h5 className="fw-semibold">{reason.title}</h5>
                    <p className="text-light">{reason.desc}</p>
                  </div>
                 
                </div>
              ))}
            </div>
          </div>

          {/* سلايدر الصور */}
          <div className="col-md-6 text-center">
            <div id="carouselWhy" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#carouselWhy"
                    data-bs-slide-to={i}
                    className={i === 0 ? "active" : ""}
                    aria-current={i === 0 ? "true" : undefined}
                    aria-label={`شريحة ${i + 1}`}
                  ></button>
                ))}
              </div>

              <div className="carousel-inner">
                {[
                  "https://i.postimg.cc/vHZQPQht/Screenshot-83.png",
                  "https://i.postimg.cc/MT5CRQCB/Screenshot-84.png",
                  "https://i.postimg.cc/XvcmS575/Screenshot-85.png",
                ].map((src, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                    <img
                      src={src}
                      className="d-block w-100 rounded-4 shadow-sm"
                      alt={`إطارات سبيد سيل - ميزة ${i + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselWhy"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">السابق</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselWhy"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">التالي</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;