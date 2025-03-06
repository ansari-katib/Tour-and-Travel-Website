import React from 'react'
import Navebar from '../components/Navebar';
import Hero from '../components/Hero';
// import ServiceImg from "../assets/Servicesimg.jpg";
import food_img from "../assets/food.jpg" 
import Footer from '../components/Footer';
// import Trip from '../components/Trip'
import Food from '../components/Food';

function Service() {
  return (
    <>
    <Navebar /> 

    <Navebar />
      <Hero
        cName="hero"
        HeroImg={food_img}
        title="Indian Food"
        text="Indian famous Food"
        url="/services"
      />
      {/* <Trip /> */}
      <Food />
      <Footer />
    </>
  )
}

export default Service;
