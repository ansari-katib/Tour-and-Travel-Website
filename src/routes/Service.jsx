import React from 'react'
import Navebar from '../components/Navebar';
import Hero from '../components/Hero';
import ServiceImg from "../assets/Servicesimg.jpg";
import Footer from '../components/Footer';
import Trip from '../components/Trip'

function Service() {
  return (
    <>
    <Navebar /> 

    <Navebar />
      <Hero
        cName="hero"
        HeroImg={ServiceImg}
        title="Service page"
        text="Travelling services"
        url="/services"
      />
      <Trip />
      <Footer />
    </>
  )
}

export default Service;
