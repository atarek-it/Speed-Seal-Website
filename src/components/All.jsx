import React from 'react'
import TireCategory from '../page/TireCategory'
import Why from './Why'
import AboutUs from './About'
import Testimonials from './Testimonials'
import Products from './Product'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'

const All = () => {
  return (
    <>
    <Home />
    <TireCategory />
    <Why />
    <AboutUs />
    <Products />
    <Testimonials />   
    <Services />
    <Contact />
    </>
  );
}

export default All;