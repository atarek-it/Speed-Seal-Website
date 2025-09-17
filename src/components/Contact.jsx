import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",   // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"     // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
          setTimeout(() => setMessageSent(false), 5000); // hide success message after 5s
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      className="contact py-5"
      style={{ background: "linear-gradient(135deg, #fff 70%, #E479451a)" }}
      id="contact"
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Contact <span style={{ color: "#E47945" }}>Us</span>
          </h2>
          <p className="text-muted">We’d love to connect with you. Let’s talk!</p>
        </div>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="card shadow border-0 h-100 p-4 rounded-4 hover-shadow">
              <h5 className="fw-bold mb-3" style={{ color: "#E47945" }}>Get in Touch</h5>
              <p className="text-muted">
                Whether you have questions, feedback, or need support, our team is always ready to assist.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-center">
                  <span
                    className="d-flex justify-content-center align-items-center rounded-circle me-3"
                    style={{ width: "40px", height: "40px", backgroundColor: "#E479451a" }}
                  >
                    <Phone style={{ color: "#E47945" }} />
                  </span>
                  <a href="tel:+123445678" className="text-dark text-decoration-none fw-semibold">
                    +1 234 456 78
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span
                    className="d-flex justify-content-center align-items-center rounded-circle me-3"
                    style={{ width: "40px", height: "40px", backgroundColor: "#E479451a" }}
                  >
                    <Mail style={{ color: "#E47945" }} />
                  </span>
                  <a href="mailto:info@speedsealing.com" className="text-dark text-decoration-none fw-semibold">
                    info@speedsealing.com
                  </a>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span
                    className="d-flex justify-content-center align-items-center rounded-circle me-3"
                    style={{ width: "40px", height: "40px", backgroundColor: "#E479451a" }}
                  >
                    <MapPin style={{ color: "#E47945" }} />
                  </span>
                  <span className="text-dark fw-semibold">Cairo, Egypt</span>
                </li>
                <li className="d-flex align-items-center">
                  <span
                    className="d-flex justify-content-center align-items-center rounded-circle me-3"
                    style={{ width: "40px", height: "40px", backgroundColor: "#E479451a" }}
                  >
                    <Clock style={{ color: "#E47945" }} />
                  </span>
                  <div>
                    <span className="text-dark fw-semibold d-block">24h/7</span>
                  </div>
                </li>
                <li className="my-3 d-flex align-items-center">
  <span
    className="d-flex justify-content-center align-items-center rounded-circle me-3"
    style={{ width: "40px", height: "40px", backgroundColor: "#E479451a" }}
  >
    <MapPin style={{ color: "#E47945" }} />
  </span>
  <span className="text-dark fw-semibold">
    Villa 19, Area B, South Academy, New Cairo, Egypt
  </span>
</li>

              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="card shadow border-0 h-100 p-4 rounded-4">
              <h5 className="fw-bold mb-3" style={{ color: "#E47945" }}>Send a Message</h5>

              {messageSent && (
                <p className="text-success text-center mb-3">Message sent successfully!</p>
              )}

              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control rounded-3 shadow-sm"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control rounded-3 shadow-sm"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn text-white fw-semibold w-100 py-2"
                  style={{
                    backgroundColor: "#E47945",
                    borderRadius: "30px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#E47945")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#E47945")}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Optional Google Map */}
        <div className="mt-5">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3454.184870552134!2d31.421609775553165!3d30.031553674930056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAxJzUzLjYiTiAzMcKwMjUnMjcuMSJF!5e0!3m2!1sen!2seg!4v1758101448307!5m2!1sen!2seg" 
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "20px" }}
            allowFullScreen
            loading="lazy"
            >
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
