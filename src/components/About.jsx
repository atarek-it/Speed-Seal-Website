// src/components/AboutUs.jsx
import React from "react";
import aboutImg from "../images/about.png"; // replace with your actual image

const AboutUs = () => {
  return (
    <section className="about-us py-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3 display-5">
              About <span style={{ color: "#E47945" }}>Speed Seal Tires</span>
            </h2>
            <p className="text-muted fs-5 mb-4">
              At Speed Seal, we are dedicated to revolutionizing the tire industry by delivering durable, innovative, and high-performance tires designed for every road. Our advanced self-sealing technology protects against punctures, giving drivers peace of mind, reliability, and comfort wherever the journey leads.
            </p>

            <ul className="list-unstyled text-muted mb-4 fs-5">
              <li>✔ Advanced Self-Sealing Technology</li>
              <li>✔ Performance & Safety Driven</li>
              <li>✔ Comfort Across All Seasons</li>
            </ul>

            <button
              className="btn text-white fw-semibold px-5 py-3 rounded-pill shadow"
              style={{ backgroundColor: "#E47945", fontSize: "1.1rem" }}
            >
              Learn More
            </button>

            {/* Trust / Stats Section */}
            <div className="d-flex gap-4 mt-5">
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#E47945" }}>
                  10+
                </h3>
                <p className="text-muted mb-0">Years of Innovation</p>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#E47945" }}>
                  500K+
                </h3>
                <p className="text-muted mb-0">Happy Drivers</p>
              </div>
              <div>
                <h3 className="fw-bold mb-0" style={{ color: "#E47945" }}>
                  50+
                </h3>
                <p className="text-muted mb-0">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={aboutImg}
              alt="About Headway Tires"
              className="img-fluid rounded-4 shadow-lg"
              style={{ transition: "0.3s ease-in-out" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
