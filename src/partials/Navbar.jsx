import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "#1c1c1c", direction: "rtl" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* اللوجو */}
        <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#">
          <img
            src={logo}
            className="logo"
            alt="Speed Seal"
            style={{ height: "80px", marginLeft: "20px" }}
          />
        </a>

        {/* زر الموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="تبديل القائمة"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* الروابط */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex align-items-center mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active px-3" href="#">
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#about">
                من نحن
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#products">
                المنتجات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#services">
                الخدمات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#contact">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
