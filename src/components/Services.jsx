import React from 'react';
import { Truck, Wrench, Headphones, ShieldCheck, RotateCcw, Zap, Star, Settings } from "lucide-react";

const Services = () => {
  const services = [
    { icon: <Truck size={30} color="#E47945" />, title: "Fast Delivery", desc: "Quick and reliable delivery service, ensuring your tires arrive on time." },
    { icon: <Wrench size={30} color="#E47945" />, title: "Tire Installation", desc: "Professional installation & balancing services for a safe ride." },
    { icon: <Headphones size={30} color="#E47945" />, title: "24/7 Support", desc: "Our team is available around the clock to assist you anytime." },
    { icon: <ShieldCheck size={30} color="#E47945" />, title: "Warranty & Returns", desc: "Hassle-free warranty and returns for your peace of mind." },
    { icon: <RotateCcw size={30} color="#E47945" />, title: "Tire Rotation", desc: "Extend the life of your tires with our professional rotation services." },
    { icon: <Zap size={30} color="#E47945" />, title: "Vehicle Inspection", desc: "Comprehensive vehicle checks to ensure your safety on the road." },
    { icon: <Star size={30} color="#E47945" />, title: "Premium Quality Tires", desc: "We provide only the best tires, tested for durability and safety." },
    { icon: <Settings size={30} color="#E47945" />, title: "Maintenance Services", desc: "Expert tire maintenance and repairs for optimal performance." },
  ];

  return (
    <section className="services py-5" style={{ backgroundColor: "#f8f9fa" }} id='services'>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Our <span style={{ color: "#E47945" }}>Services</span>
          </h2>
          <p className="text-muted">We don’t just provide products – we provide complete solutions.</p>
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
