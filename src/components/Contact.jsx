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
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log(error.text);
          alert("عذرًا! حدث خطأ ما. يرجى المحاولة مرة أخرى.");
        }
      );
  };

  return (
    <section
      className="contact py-5"
      style={{ background: "linear-gradient(135deg, #fff 70%, #E479451a)" }}
      id="contact"
      dir="rtl"
    >
      <div className="container">
        {/* العنوان */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            تواصل <span style={{ color: "#E47945" }}>معنا</span>
          </h2>
          <p className="text-muted">يسعدنا التواصل معك، لنتحدث معًا!</p>
        </div>

        <div className="row g-4">
          {/* معلومات التواصل */}
          <div className="col-md-6">
            <div className="card shadow border-0 h-100 p-4 rounded-4 hover-shadow text-end card shadow border-0 h-100 p-4 rounded-4 hover-shadow text-end contact-card">
              <h5 className="fw-bold mb-3" style={{ color: "#E47945" }}>
                تواصل معنا
              </h5>
              <p className="text-muted">
                سواء كانت لديك أسئلة، ملاحظات، أو تحتاج إلى دعم، فإن فريقنا دائمًا جاهز لمساعدتك.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex flex-row-reverse align-items-center text-end">
                     <a href="tel:+123445678" className="text-dark text-decoration-none fw-semibold">
                    قريبًا
                  </a>
                  <span
                    className="d-flex justify-content-center align-items-center rounded-circle ms-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#E479451a",
                    }}
                  >
                    <Phone style={{ color: "#E47945" }} />
                  </span>
               
                </li>

                <li className="mb-3 d-flex flex-row-reverse align-items-center text-end">
                   <a href="mailto:info@speedsealing.com" className="text-dark text-decoration-none fw-semibold">
                    info@speedsealing.com
                  </a>
                  <span
                    className="d-flex justify-content-center align-items-center rounded-circle ms-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#E479451a",
                    }}
                  >
                    <Mail style={{ color: "#E47945" }} />
                  </span>
                 
                </li>
                <li className="mb-3 d-flex flex-row-reverse align-items-center text-end">
                                    <span className="text-dark fw-semibold">24 ساعة / 7 أيام</span>

                  <span
                    className="d-flex justify-content-center align-items-center rounded-circle ms-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#E479451a",
                    }}
                  >
                    <Clock style={{ color: "#E47945" }} />
                  </span>
                </li>

                <li className="mb-3 d-flex flex-row-reverse align-items-center text-end">
                   <span className="text-dark fw-semibold">
                    فيلا 19، المنطقة ب، الأكاديمية الجنوبية، القاهرة الجديدة، مصر
                  </span>
                  <span
                    className="d-flex justify-content-center align-items-center rounded-circle ms-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#E479451a",
                    }}
                  >
                    <MapPin style={{ color: "#E47945" }} />
                  </span>
                 
                </li>
              </ul>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div className="col-md-6">
            <div className="card shadow border-0 h-100 p-4 rounded-4 text-end">
              <h5 className="fw-bold mb-3" style={{ color: "#E47945" }}>
                أرسل رسالة
              </h5>

              {messageSent && (
                <p className="text-success text-center mb-3">تم إرسال الرسالة بنجاح!</p>
              )}

              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control rounded-3 shadow-sm text-end"
                    placeholder="اسمك"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="user_phone"
                    className="form-control rounded-3 shadow-sm text-end"
                    placeholder="رقم تلفونك"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_address"
                    className="form-control rounded-3 shadow-sm text-end"
                    placeholder="عنوانك"
                    required
                  />
                </div>

                <div className="mb-3">
                  <select
                    name="requested_size"
                    className="form-control rounded-3 shadow-sm text-end"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      اختار المقاس المطلوب
                    </option>
                    <option value="255/50 R20">255/50 R20</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="custom_size"
                    className="form-control rounded-3 shadow-sm text-end"
                    placeholder="اكتب المقاس لو مش موجود"
                  />
                </div>

                <button
                  type="submit"
                  className="btn text-white fw-semibold w-100 py-2"
                  style={{ backgroundColor: "#E47945", borderRadius: "30px", transition: "all 0.3s ease" }}
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* خريطة جوجل */}
        <div className="mt-5">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3454.184870552134!2d31.421609775553165!3d30.031553674930056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAxJzUzLjYiTiAzMcKwMjUnMjcuMSJF!5e0!3m2!1sen!2seg!4v1758101448307!5m2!1sen!2seg"
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "20px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
