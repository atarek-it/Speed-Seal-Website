import React from "react";
import { useParams, Link } from "react-router-dom";
import img from "../images/tire.png";

const TireDetails = () => {
  const { tireId } = useParams();

  const tires = {
    selfSealing: {
      title: "Speed Seal Self-Sealing Tires",
      desc: "Equipped with advanced self-sealing technology, these tires automatically seal punctures, ensuring a safer and stress-free drive.",
      features: [
        "Advanced self-sealing technology",
        "Durable and long-lasting",
        "Enhanced safety on punctures",
        "Smooth and comfortable ride",
      ],
    },
    performance: {
      title: "Speed Seal Performance Tires",
      desc: "Engineered for superior grip, stability, and responsive control — perfect for drivers who demand speed and precision.",
      features: [
        "High-performance grip and control",
        "Precision handling at high speeds",
        "Durable and robust design",
        "Enhanced braking performance",
      ],
    },
    allSeason: {
      title: "Speed Seal All-Season Tires",
      desc: "Reliable performance in dry, wet, and light snowy conditions with a quiet, comfortable ride all year round.",
      features: [
        "All-season reliability",
        "Smooth and quiet ride",
        "Excellent traction on wet and dry roads",
        "Durable rubber compound",
      ],
    },
  };

  const tire = tires[tireId];

  if (!tire) return <p className="text-center mt-5">Tire not found</p>;

  return (
    <section className="tire-details py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={img}
              alt={tire.title}
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>

          {/* Details */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">{tire.title}</h2>
            <p className="text-muted mb-4">{tire.desc}</p>

            <ul className="list-unstyled mb-4">
              {tire.features.map((feature, index) => (
                <li key={index} className="mb-2 d-flex align-items-center">
                  <span
                    className="me-2"
                    style={{
                      display: "inline-block",
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#ff7230",
                      borderRadius: "50%",
                    }}
                  ></span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="d-flex gap-2">
              <Link
                to="/"
                className="btn fw-semibold text-white px-4 py-2 rounded-pill"
                style={{ background: "linear-gradient(90deg, #ff7230, #d90f34)" }}
              >
                Back to Tires
              </Link>
              <Link
                to="/contact"
                className="btn fw-semibold text-white px-4 py-2 rounded-pill"
                style={{ background: "linear-gradient(90deg, #007bff, #0056b3)" }}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TireDetails;
