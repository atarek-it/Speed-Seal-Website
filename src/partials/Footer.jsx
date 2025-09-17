import React from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="text-white pt-5" style={{ background: "#1a1a1a" }}>
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-3">Speed <span>Seal</span></h4>
            <p className="text-light">
              Providing innovative tire sealing solutions that last longer, 
              save costs, and ensure safety on every road.
            </p>
            <div className="d-flex gap-3 mt-3 footer-links">
              <a href="#" className="text-white fs-5"><Facebook /></a>
              <a href="#" className="text-white fs-5"><Twitter /></a>
              <a href="#" className="text-white fs-5"><Instagram /></a>
              <a href="#" className="text-white fs-5"><Linkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none d-block mb-2">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <Phone size={18} className="me-2" style={{ color: "#E47945" }} /> 
                <a href="tel:+123445678" className="text-light text-decoration-none">+1 234 456 78</a>
              </li>
              <li className="d-flex align-items-center mb-2">
                <Mail size={18} className="me-2" style={{ color: "#E47945" }} /> 
                <a href="mailto:info@speedsealing.com" className="text-light text-decoration-none">info@speedsealing.com</a>
              </li>
              <li className="d-flex align-items-center">
                <MapPin size={18} className="me-2" style={{ color: "#E47945" }} /> 
                <span className="text-light">Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <p className="mb-0 small text-light">
            © {new Date().getFullYear()} <span>Abdelfattah Tarek</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
