import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/tire.png';

const TireCategory = () => {
  const tires = [
    { id: 'selfSealing', title: "Headway Self-Sealing Tires", desc: "Equipped with advanced self-sealing technology, these tires automatically seal punctures for a safer and stress-free drive." },
    { id: 'performance', title: "Headway Performance Tires", desc: "Engineered for grip, stability, and responsive control — perfect for drivers who demand speed and precision." },
    { id: 'allSeason', title: "Headway All-Season Comfort Tires", desc: "Reliable performance in dry, wet, and light snowy conditions with a smooth, quiet ride for year-round comfort." }
  ];

  return (
    <section className="tire-category py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Explore Our <span style={{ color: "#ff7230" }}>Tire Range</span>
          </h2>
          <p className="text-muted">
            Headway tires designed to fit every journey — performance, safety, and comfort.
          </p>
        </div>

        <div className="row g-4">
          {tires.map((tire, index) => (
            <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card border-0 rounded-4 h-100 overflow-hidden shadow-sm" style={{ transition: "all 0.3s ease" }}>
                <div className="row g-0 align-items-center h-100">
                  {/* Text */}
                  <div className="col-12 col-md-7 p-3">
                    <h5 className="fw-bold">{tire.title}</h5>
                    <p className="text-muted small">{tire.desc}</p>
                    <Link 
                      to={`/tire/${tire.id}`} 
                      className="btn text-white fw-semibold px-3 py-1 rounded-pill mt-2"
                      style={{ background: "linear-gradient(90deg, #ff7230,rgb(255, 146, 95))" }}
                    >
                      Explore
                    </Link>
                  </div>
                  {/* Image */}
                  <div className="col-12 col-md-5 text-center bg-light h-100 d-flex align-items-center justify-content-center p-2">
                    <Link to={`/tire/${tire.id}`}>
                      <img
                        src={img}
                        alt="Headway Tire"
                        className="img-fluid"
                        style={{ maxHeight: "120px", objectFit: "contain", cursor: "pointer" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tire-category .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}

export default TireCategory;
