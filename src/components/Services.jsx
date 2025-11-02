import React from 'react';
import { Truck, Wrench, Headphones, ShieldCheck, RotateCcw, Zap, Star, Settings } from "lucide-react";

const Services = () => {
  const services = [
    { icon: <Truck size={30} color="#E47945" />, title: "توصيل سريع", desc: "خدمة توصيل سريعة وموثوقة تضمن وصول إطاراتك في الوقت المحدد." },
    { icon: <Wrench size={30} color="#E47945" />, title: "تركيب الإطارات", desc: "خدمات تركيب وتوازن احترافية لقيادة آمنة ومريحة." },
    { icon: <Headphones size={30} color="#E47945" />, title: "دعم على مدار الساعة", desc: "فريقنا متاح على مدار 24 ساعة لتقديم المساعدة في أي وقت." },
    { icon: <ShieldCheck size={30} color="#E47945" />, title: "الضمان والاسترجاع", desc: "ضمان لمدة سنتين — استمتع بتغطية خالية من المتاعب وعمليات استرجاع سهلة لراحة بالك." },
    { icon: <RotateCcw size={30} color="#E47945" />, title: "تدوير الإطارات", desc: "مدد عمر الإطارات من خلال خدمات التدوير الاحترافية لدينا." },
    { icon: <Zap size={30} color="#E47945" />, title: "فحص المركبة", desc: "فحوصات شاملة للمركبة لضمان سلامتك أثناء القيادة." },
    { icon: <Star size={30} color="#E47945" />, title: "إطارات عالية الجودة", desc: "نقدم أفضل الإطارات فقط، التي تم اختبارها لضمان المتانة والسلامة." },
    { icon: <Settings size={30} color="#E47945" />, title: "خدمات الصيانة", desc: "صيانة وإصلاح احترافي للإطارات لتحقيق الأداء الأمثل." },
  ];

  return (
    <section className="services py-5" style={{ backgroundColor: "#f8f9fa" }} id='services'>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            <span style={{ color: "#E47945" }}>خدماتنا</span>
          </h2>
          <p className="text-muted">نحن لا نقدم منتجات فقط – بل نقدم حلولًا متكاملة.</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card shadow border-0 h-100 p-4 rounded-4 text-center service-card">
                <div 
                  className="d-flex justify-content-center align-items-center rounded-circle mb-3 mx-auto"
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "linear-gradient(135deg, #E479451a, #E4794533)" 
                  }}
                >
                  {service.icon}
                </div>
                <h6 className="fw-bold mb-2">{service.title}</h6>
                <p className="text-muted small">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card {
          transition: all 0.3s ease-in-out;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </section>
  );
}

export default Services;
