import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './partials/Navbar';
import TireDetails from './page/TireDetails';
import All from './components/All';
import Footer from './partials/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/home" element={<All />} />
        <Route path="/about" element={<All />} />
        <Route path="/products" element={<All />} />
        <Route path="/services" element={<All />} />
        <Route path="/testimonials" element={<All />} />
        <Route path="/contact" element={<All />} />
        <Route path="/tire/:tireId" element={<TireDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
