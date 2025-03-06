import React from 'react'
import Navebar from '../components/Navebar'
import Hero from '../components/Hero'
import AboutImg from "../assets/Aboutimg.jpg";
import Footer from '../components/Footer';
// import AboutUs from '../components/AboutUs'
import Detail from '../components/Detail';

function About() {
  return (
    <>
      <Navebar />
      <Hero
        cName="hero"
        HeroImg={AboutImg}
        title="About Page"
        text="Know more About me"
        url="/about"
      />
      {/* <AboutUs /> */}
      <Detail />
      <Footer />
    </>
  )
}

export default About
