import React from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="text-white pt-5" style={{ background: "#1a1a1a" }} dir="rtl">
      <div className="container text-end">
        <div className="row gy-4">

          {/* معلومات الشركة */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-3">سبيد <span>سيل</span></h4>
            <p className="text-light">
              نقدم حلولًا مبتكرة لإغلاق الإطارات تدوم لفترة أطول، 
              وتوفر التكاليف، وتضمن السلامة على كل طريق.
            </p>
            <div className="d-flex justify-content-end gap-3 mt-3 footer-links">
              <a href="#" className="text-white fs-5"><Facebook /></a>
              <a href="#" className="text-white fs-5"><Twitter /></a>
              <a href="#" className="text-white fs-5"><Instagram /></a>
              <a href="#" className="text-white fs-5"><Linkedin /></a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">روابط سريعة</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">الرئيسية</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">من نحن</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">خدماتنا</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">المنتجات</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">تواصل معنا</a></li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">تواصل معنا</h6>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center justify-content-end mb-2">
                <a href="tel:+123445678" className="text-light text-decoration-none"> قريبًا </a>
                <Phone size={18} className="ms-2" style={{ color: "#E47945" }} /> 
              </li>
              <li className="d-flex align-items-center justify-content-end mb-2">
                <a href="mailto:info@speedsealing.com" className="text-light text-decoration-none">info@speedsealing.com</a>
                <Mail size={18} className="ms-2" style={{ color: "#E47945" }} /> 
              </li>
              <li className="d-flex align-items-center justify-content-end">
                <span className="text-light">القاهرة، مصر</span>
                <MapPin size={18} className="ms-2" style={{ color: "#E47945" }} /> 
              </li>
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="mb-0 small text-light">
            © {new Date().getFullYear()} <span> Quantix IT Solutions</span>. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
